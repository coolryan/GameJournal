#Create the Pydantic models
#Create initial Pydantic models / schemas
from pydantic import BaseModel

class ItemBase(BaseModel):
	"""docstring for ItemBase"""
	title: str
	description: str | None = None

	#Use Pydantic's orm_mode
	class Config:
		"""docstring for Config"""
		orm_mode = True
			
class ItemCreate(ItemBase):
	"""docstring for ItemCreate"""
	pass

class GameBase(BaseModel):
	"""docstring for GameBase"""
	pass

class GameCreate(GameBase):
	"""docstring for GameCreate"""
	pass
		
#Create Pydantic models / schemas for reading / returning
class Item(ItemBase):
	"""docstring for Item"""
	id: int
	item_id: int
		
class Game(GameBase):
	"""docstring for Game"""
	id: int
	name: str
	items: list[Item] = []

	#Use Pydantic's orm_mode
	class Config:
		"""docstring for Config"""
		orm_mode = True
