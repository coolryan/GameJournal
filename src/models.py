#Create the database models
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date
from sqlalchemy.orm import relationship

from database import Base

#Create SQLAlchemy models from the Base class
class Game(Base):
	"""docstring for Gamer"""
	__tablename__ = "Game"

	#Create model attributes/columns
	id = Column(Integer, primary_key=True, index=True)
	name = Column(String)
	description = Column(String)
	publish_year = Column(Date)
