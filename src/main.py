#Main FastAPI app
import os

from fastapi import Depends, FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
# from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
# from starlette.responses import RedirectResponse
import uvicorn

import crud, models, schemas
from database import SessionLocal, engine, get_db
from frontend import routes as frontend_routes


env = os.environ.get("ENVIRONMENT", "production")
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=['*'],
#     allow_methods=["*"],
#     allow_headers=["*"],
#     allow_credentials=True,
# )

app.mount("/static", StaticFiles(directory = "src/game-journal-fe/build"), name = "static")
app.include_router(frontend_routes.router)

@app.get("/healthz")
async def get_healthz():
	return {"message": "Hello Bigger Applications!"}

#Create your FastAPI path operations
# @app.get("/")
# def main():
#     return RedirectResponse(url="/docs/")

@app.get("/games/", response_model=list[schemas.Game])
def read_games(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    games = crud.get_games(db, skip=skip, limit=limit)
    return games

@app.post("/games/", response_model=schemas.Game)
def create_game(game: schemas.Game, db: Session = Depends(get_db)):
	db_game = crud.create_game(db, game)
	return db_game

@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_username(db, username=user.username)
    if db_user:
        raise HTTPException(status_code=400, detail="username and/or password incorrect")
    return crud.create_user(db=db, user=user)

@app.get("/users/", response_model=schemas.User)
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users

@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@app.get("/test")
def test(db: Session = Depends(get_db)):
    db_user = crud.get_user_username(db, username="blackjack")
    print(f"Games: {db_user.games}")

@app.post("/contact/", response_model=schemas.ContactForm)
def _get_form(contact: schemas.ContactForm):
    print(contact.name, contact.email, contact.message)
    return contact


if __name__ == '__main__':
    kwargs = {
        "host": "127.0.0.1",
        "port": 8000,
    }
    if env.lower() == "local":
        args = ["main:app"]
        kwargs["reload"] = True
    else:
        args = [app]

    uvicorn.run(*args, **kwargs)

