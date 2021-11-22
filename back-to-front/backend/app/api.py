from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas
from .database import engine, SessionLocal, Base

Base.metadata.create_all(bind=engine)
app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get('/')
async def read_root():
    return {'message': 'Hello World!'}

@app.post('/post-article')
def create_article(request: schemas.Article, db: Session = Depends(get_db)):
    new_article = models.Article(title=request.title, body=request.body)
    db.add(new_article)
    db.commit()
    db.refresh(new_article)
    return new_article

@app.get('/get-all-articles')
def get_all_articles(db: Session = Depends(get_db)):
    articles = db.query(models.Article).all()
    return articles

@app.get('/get-article/{id}')
def get_article(id: int, db: Session = Depends(get_db)):
    article = db.query(models.Article).filter(models.Article.id == id).first()
    if not article:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Article with the id {id} is not found')
    return article