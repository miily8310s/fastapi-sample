from fastapi import FastAPI, Path, Query
from pydantic import BaseModel
from typing import Optional
app = FastAPI()

# getメソッド
@app.get('/')
async def helloWorld():
  return {'text': 'Hello World!!!'}

@app.get('/hogefuga')
async def hogeFuga():
  return {'hoge': 'fuga'}

## /{param}に入っているものはparams、それ以外はquery扱いとなる
@app.get('/parameter/{path}')
async def getParameter(
    path: str, # params
    query: int,  # query（必須）
    default_none: Optional[str] = None # query（任意）
  ):
  '''
  ex) \n
    /parameter/aaa/?query=1
    return {"sample_text":"aaa, 1 default is None"} \n
    /parameter/bbb?query=2&default_none=test
    return {"sample_text":"bbb, 2 default is test"}
  '''
  return {"sample_text": f"{path}, {query} default is {default_none}"}

## Pathはparams、Queryはqueryに指定する
@app.get('/items/{item_id}')
async def getItem(
    *,
    item_id: int = Path(..., title='id of the item to get', gt=1, lt=10), # 必須 / 1 < 値 < 10
    q: float = Query(3, ge=3, le=555)  # 必須 / 3 <= 値 <= 555
  ):
  return {"valid_parameters": f"{item_id}, {q}"}

# POSTメソッド
class DataModel(BaseModel):
  name: str
  option: Optional[str] = None

@app.post('/setname')
async def set_name(data: DataModel):
  return {"data": f"Name is {data.name}, {data.option}"}
