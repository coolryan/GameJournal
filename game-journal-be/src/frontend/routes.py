from fastapi import APIRouter, Request, Form, Depends, status, HTTPException
from fastapi.responses import FileResponse
from starlette.responses import RedirectResponse

from database import get_db
from models import hash_password
from crud import get_user_username

from sqlalchemy.orm import Session

router = APIRouter()

@router.get("/header")
async def get_header():
	return FileResponse("game-journal-fe/public/header.html")

@router.get("/login")
async def login():
	return FileResponse("game-journal-fe/public/login.html")

@router.get("/list_games")
async def get_list_games():
	return FileResponse("game-journal-fe/public/list_games.html")

@router.get("/")
async def get_index():
	return RedirectResponse("/static/index.html")

@router.post("/login")
async def post_login(username: str = Form(), password: str = Form(), db: Session = Depends(get_db)):

	user = get_user_username(db, username)

	if user is None:
		raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="username and/or password incorrect")

	if hash_password(password) == user.hashed_password:
		return await index();
	else:
		raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="username and/or password incorrect")
