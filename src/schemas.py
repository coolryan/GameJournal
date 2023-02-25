#Create the Pydantic models
#Create initial Pydantic models / schemas
from pydantic import BaseModel
from datetime import datetime, time

#Use Pydantic's orm_mode	
#Create Pydantic models / schemas for reading / returning		
class Game(BaseModel):
	"""docstring for Game"""
	id: int
	name: str
	description: str

	#Use Pydantic's orm_mode
	class Config:
		"""docstring for Config"""
		orm_mode = True
