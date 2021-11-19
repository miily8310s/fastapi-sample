from fastapi import FastAPI
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