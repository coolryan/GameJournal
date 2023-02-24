#Main FastAPI app
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/healthz")
async def get_healthz():
	return {"message": "Hello Bigger Applications!"}

# Dependency
def get_bd():
	db = SessionLocal()
	try:
		yield db 
	finally:
		db.close()

#Create your FastAPI path operations
@app.get("/items/", response_model=list[schemas.Item])
def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = crud.get_items(db, skip=skip, limit=limit)
    return items
