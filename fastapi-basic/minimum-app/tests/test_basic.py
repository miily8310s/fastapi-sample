from starlette.testclient import TestClient
from basic import app

client = TestClient(app)

def test_helloWorld():
  res = client.get('/')
  assert res.status_code == 200
  assert res.json() == {'text': 'Hello World!!!'}