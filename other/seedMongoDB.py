#This file is used to seed a mongo DB using pymongo
# 

# from pymongo import MongoClient

# client = MongoClient("mongodb+srv://edxz7c:2sqr2=sqr8@cluster0-yhjjr.mongodb.net/test?retryWrites=true&w=majority")
# db = client.get_database('test')
# records = db.testTimeStamps

#count records
# print(records.count_documents({}))

#Create new documents

# new_commerce = {
#     _id:"ObjectID(5dfb242cb9752539a4104b2e)",
#     name:"Rammen 3",
#     address:"Tolima 122",
#     category:"Restaurant",
#     numEmployees:"30",
#     author:"ObjectID(5dfb242cb9752539a4104b2e)"
#     createdAt:"2019-12-19T07:18:04.237+00:00"
#     updatedAt:"2019-12-22T20:11:49.712+00:00"
# }

# records.insert_one(new_commerce)

import datetime

print(datetime.date())