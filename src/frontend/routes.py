from fastapi import APIRouter, Request, Form, Depends, status, HTTPException
from fastapi.responses import FileResponse

from database import get_db
from models import hash_password
from crud import get_user_username

from sqlalchemy.orm import Session

router = APIRouter()

@router.get("/login")
async def login():
	return FileResponse("static/login.html")

@router.get("/index")
async def index():
	return FileResponse("static/index.html")

@router.get("/CSS/{css_file}")
async def get_css(css_file: str):
	return FileResponse(f"static/CSS/{css_file}")

@router.get("/JS/{js_file}")
async def get_js(js_file: str):
	return FileResponse(f"static/JS/{js_file}")

@router.post("/login")
async def post_login(username: str = Form(), password: str = Form(), db: Session = Depends(get_db)):

	user = get_user_username(db, username)

	if user is None:
		raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="username and/or password incorrect")

	if hash_password(password) == user.hashed_password:
		return await index();
	else:
		raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="username and/or password incorrect")
