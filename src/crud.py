#CRUD utils
#Read data
from sqlalchemy.orm import Session

import models, schemas

def get_game(db: Session, game_id: int, game_name: str, game_description: str):
	return db.query(models.Game).filter(models.Game.id == game_id, 
		models.Game.name == game_name, models.Game.description == game_description).first()

def get_games(db: Session, skip: int = 0, limit: int = 100):
	return db.query(models.Game).offset(skip).limit(limit).all()

#Create data
def create_game(db: Session, game: schemas.Game):
	db_game = models.Game(name = game.name, description = game.description)
	db.add(db_game)
	db.commit()
	db.refresh(db_game)
	return db_game
