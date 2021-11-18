from fastapi import FastAPI
app = FastAPI()

# getメソッド
@app.get('/')
async def helloWorld():
  return {'text': 'Hello World!!!'}

@app.get('/hogefuga')
async def hogeFuga():
  return {'hoge': 'fuga'}