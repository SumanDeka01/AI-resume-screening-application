from fastapi import FastAPI
from app.api.resume_routes import router

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "Your backend is Running"
    }

@app.get("/about")
def about():
    return {
        "message": "Hey therevjsafasdf"
    }
    
app.include_router(router)