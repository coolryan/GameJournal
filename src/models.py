#Create the database models
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.types import Date
from sqlalchemy.orm import relationship

from database import Base

#Create SQLAlchemy models from the Base class
class UserGame(Base):
 	"""docstring for UserGame"""
 	__tablename__ = "UserGame"

 	id = Column(Integer, primary_key=True, index=True)
 	user_id = Column(Integer, ForeignKey("User.id"))
 	game_id = Column(Integer, ForeignKey("Game.id"))

class Game(Base):
	"""docstring for Gamer"""
	__tablename__ = "Game"

	#Create model attributes/columns
	id = Column(Integer, primary_key=True, index=True)
	name = Column(String(255), index=True)
	description = Column(String(255), index=True)
	# publish_year = Column(Date)

	users = relationship("User", secondary="UserGame", backref="Game")

class User(Base):
	"""docstring for User"""
	__tablename__ = "User"

	id = Column(Integer, primary_key=True, index=True)
	username = Column(String(255), unique=True, index=True)
	hashed_password = Column(String(255), index=True)
	is_active = Column(Boolean, default=True)

	games = relationship("Game", secondary="UserGame", backref="User")

def hash_password(password: str):
	return password + "notreallyhashed"

# user = get_user_username("bobby")
# games = user.games
# for game in games:
# 	print(f"You have this game: {game}")