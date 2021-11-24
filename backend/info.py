import json
from models import mydatabase
from flask import Flask, jsonify, request
from bson import json_util, ObjectId
import requests
import pymongo

class User_info:
    def __init__(self,info):
        self.company_name=info["company_name"]
        self.name=info["name"]
        self.contact_no=info["contact_no"]
        self.email=info["email"]
        self.designation=info["designation"]
        self.birth_date=info["birth_date"]

def input_user_info(data):
    info=User_info(data)
    mydatabase.info.insert_one(info.__dict__)
    return "user-info-added"

def edit_user_info(data):
    # try:
        query = {"company_name": data["company_name"],"name": data["name"]}
        info = mydatabase.info.find_one(query)
        new_info = {"$set":{"contact_no": data["contact_no"],"designation":data["designation"],"birth_date":data["birth_date"]}}
        mydatabase.info.update_one(query,new_info)
        return {
            "message":"data updated",
            "result":True
        }
    # except:
    #     return{
    #         "message":"data not updated",
    #         "result":False
    #     }

        
