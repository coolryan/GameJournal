#Main FastAPI app
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

import crud, models, schemas
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/healthz")
async def get_healthz():
	return {"message": "Hello Bigger Applications!"}

# Dependency
def get_db():
	db = SessionLocal()
	try:
		yield db 
	finally:
		db.close()

#Create your FastAPI path operations
@app.get("/games/", response_model=list[schemas.Game])
def read_games(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    games = crud.get_games(db, skip=skip, limit=limit)
    return games

@app.post("/games/", response_model=schemas.Game)
def create_game(game: schemas.Game, db: Session = Depends(get_db)):
	db_game = crud.create_game(db, game)
	return db_game
