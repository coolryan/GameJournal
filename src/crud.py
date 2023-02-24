#CRUD utils
#Read data
from sqlalchemy.orm import Session

from . import models, schemas

def get_game(db: Session, game_id: int, game_name: str):
	return db.query(models.Game).filter(models.Game.id == game_id, models.Game.name == game_name).first()

def get_games(db: Session, skip: int = 0, limit: int = 100):
	return db.query(models.Game).offset(skip).limit(limit).all()

def get_items(db: Session, skip: int = 0, limit: int = 100):
	return db.query(models.Item).offset(skip).limit(limit).all()

#Create data
def create_game(db: Session, game: schemas.GameCreate):
	db_player = models.Game(name=Game.name)
	db.add(db_player)
	db.commit()
	db.refresh(db_player)
	return db_player

def create_player_item(db: Session, item: schemas.ItemCreate, item_id: int):
	db_item = models.Item(**item.dict(), item_id=game_id)
	db.add(db_item)
	db.commit()
	db.refresh()
	return db_item
