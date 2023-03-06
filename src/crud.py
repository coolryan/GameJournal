#CRUD utils
#Read data
from sqlalchemy.orm import Session
import models
from models import hash_password

import schemas

def get_game(db: Session, game_id: int):
	return db.query(models.Game).filter(models.Game.id == game_id).first()

def get_games(db: Session, skip: int = 0, limit: int = 100):
	return db.query(models.Game).offset(skip).limit(limit).all()

def get_user(db: Session, user_id: int):
	return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_username(db: Session, username: str):
	return db.query(models.User).filter(models.User.username == username).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
	return db.query(models.User).offset(skip).limit(limit).all()

#Create data
def create_game(db: Session, game: schemas.Game):
	db_game = models.Game(name = game.name, description = game.description, publish_year = game.publish_year)
	db.add(db_game)
	db.commit()
	db.refresh(db_game)
	return db_game

def create_user(db: Session, user: schemas.UserCreate):
	faked_hashed_password = hash_password(user.password)    
	db_user = models.User(username = user.username, hashed_password = faked_hashed_password)
	db.add(db_user)
	db.commit()
	db.refresh(db_user)
	return db_user
