from fastapi import FastAPI

app = FastAPI()

@app.get("/healthz")
async def get_healthz():
	return {"message": "Hello Bigger Applications!"}
