#Create the Pydantic models
#Create initial Pydantic models / schemas
from pydantic import BaseModel
from datetime import date

#Use Pydantic's orm_mode	
#Create Pydantic models / schemas for reading / returning		
class Game(BaseModel):
	"""docstring for Game"""
	id: int
	name: str
	description: str
	publish_year: date

	#Use Pydantic's orm_mode
	class Config:
		"""docstring for Config"""
		orm_mode = True

class UserBase(BaseModel):
	"""docstring for UserBase"""
	username: str

class UserCreate(UserBase):
	"""docstring for UserCreate"""
	password: str

class User(UserBase):
	"""docstring for User"""
	id: int
	is_active: bool

	class Config:
		"""docstring for Config"""
		orm_mode = True
