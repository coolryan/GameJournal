#Create the database models
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.types import Date
from sqlalchemy.orm import relationship

from database import Base

#Create SQLAlchemy models from the Base class
class Game(Base):
	"""docstring for Gamer"""
	__tablename__ = "Game"

	#Create model attributes/columns
	id = Column(Integer, primary_key=True, index=True)
	name = Column(String(255), index=True)
	description = Column(String(255), index=True)
	publish_year = Column(Date)

class User(Base):
	"""docstring for User"""
	__tablename__ = "User"

	id = Column(Integer, primary_key=True, index=True)
	username = Column(String(255), unique=True, index=True)
	hashed_password = Column(String(255), index=True)
	is_active = Column(Boolean, default=True)
