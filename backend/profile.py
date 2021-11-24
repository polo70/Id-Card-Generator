import json
from models import mydatabase
import bcrypt
from flask_bcrypt import generate_password_hash, check_password_hash

class Profile:
    def __init__(self,profile):
        self.name = profile["name"]
        self.email = profile["email"]
        self.password = self.hash_password(profile["password"])
    def hash_password(self,pw):
        return generate_password_hash(pw).decode('utf-8')

def create_profile(profile):
    try:
        new_profile = Profile(profile)
        mydatabase.profiles.insert_one(new_profile.__dict__)
        return{
            "message":"Profile Created",
            "result":True
        }
    except:
        return{
            "message":"Profile already exist",
            "result":False
        }

def login_system(profile):
    try:
        login_details = mydatabase.profiles.find_one({"email":profile["email"]})
        if check_password_hash(login_details["password"], profile["password"]):
            return{
                "message":"login successfull",
                "name": login_details["name"],
                "result":True
            } 
        else:
            return{
                "result":False
            } 
    except:
        return{
            "message":"user doesn't exist",
            "result":False
        } 

# def print_details(companyname):
#     try:
#         profile = mydatabase.profiles.find_one({"username":username})  
#         if profile:
#             return profile
#     except:
#         return {
#             "message":"profile not found",
#             "result":True
#         }