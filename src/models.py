#Create the database models
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base

#Create SQLAlchemy models from the Base class
class Game(Base):
	"""docstring for Gamer"""
	__table__ = "Game"

	#Create model attributes/columns
	id = Column(Integer, primary_key=True, index=True)
	name = Column(String)

#Create the relationships
items = relationship("Item", back_populates="players")

class Item(Base):
	"""docstring for Item"""
	__table__ = "items"

	#Create model attributes/columns
	id = Column(Integer, primary_key=True, index=True)
	title = Column(String, index=True)
	description = Column(String, index=True)
	item_id = Column(Integer, ForeignKey("Game.id"))

#Create the relationships
players = relationship("Game", back_populates="items")
