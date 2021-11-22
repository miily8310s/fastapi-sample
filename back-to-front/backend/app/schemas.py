from pydantic import BaseModel

class ArticleBase(BaseModel):
  title: str
  body: str

class Article(ArticleBase):
  class Config():
    orm_mode = True