from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from ..database import Base
from ..api import app, get_db

SQLALCHEMY_DATABASE_URL = 'sqlite:///test.db'

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={
  'check_same_thread': False
})

TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base.metadata.create_all(bind=engine)

def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()

# https://fastapi.tiangolo.com/advanced/testing-dependencies/
app.dependency_overrides[get_db] = override_get_db

client = TestClient(app)

def test_create_article():
  response = client.post(
        "/post-article",
        json={"title": "first article", "body": "first body"},
    )
  assert response.status_code == 200
  data = response.json()
  assert data['title'] == "first article"
  assert data['body'] == "first body"
  assert 'id' in data

  response = client.get(
        "/get-article/1"
    )
  assert response.status_code == 200
  data = response.json()
  assert data['title'] == "first article"
  assert data['body'] == "first body"
  assert 'id' in data