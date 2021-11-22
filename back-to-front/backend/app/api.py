from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

todo = [
    {
        "id": "1",
        "item": "Read a book."
    },
    {
        "id": "2",
        "item": "Cycle around town."
    }
]

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

@app.get('/')
async def read_root():
    return {'message': 'Hello World!'}