import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017/")

mydatabase = client["Id_Card"]