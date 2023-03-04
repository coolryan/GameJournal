from fastapi import APIRouter, Request, Form
from fastapi.responses import FileResponse

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
async def post_login(username: str = Form(), password: str = Form()):
	if username == "Juan" and password == "lmnop":
		return await index();
	else:
		return FileResponse("static/error.html");
