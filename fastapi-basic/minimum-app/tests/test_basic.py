from starlette.testclient import TestClient
from basic import app

client = TestClient(app)

def test_helloWorld():
  res = client.get('/')
  assert res.status_code == 200
  assert res.json() == {'text': 'Hello World!!!'}

def test_hogefuga():
  res = client.get('/hogefuga')
  assert res.status_code == 200
  assert res.json() == {'hoge': 'fuga'}

def test_getParameter():
  res = client.get('/parameter/aaa/?query=1')
  assert res.status_code == 200
  assert res.json() == {"sample_text":"aaa, 1 default is None"}
  res = client.get('/parameter/bbb?query=2&default_none=test')
  assert res.status_code == 200
  assert res.json() == {"sample_text":"bbb, 2 default is test"}

def test_getItem():
  res = client.get('/items/1')
  assert res.status_code != 200
  res = client.get('/items/2')
  assert res.status_code == 200
  assert res.json() == {'valid_parameters': '2, 3'}
  res = client.get('/items/10')
  assert res.status_code != 200

def test_set_name():
  res = client.post(
    '/setname',
    json={
      'name': 'test'
    })
  assert res.status_code == 200
  assert res.json() == {'data': 'Name is test, None'}
  res = client.post(
    '/setname',
    json={
      'name': 'test',
      'option': 'Opt'
    })
  assert res.status_code == 200
  assert res.json() == {'data': 'Name is test, Opt'}