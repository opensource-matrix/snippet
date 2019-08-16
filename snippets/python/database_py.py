import mysql.connector
db_connection = mysql.connector.connect(
  host= "localhost",
  user= "root",
  passwd= "root"
)
# creating database_cursor to perform SQL operation
db_cursor = db_connection.cursor()
# executing cursor with execute method and pass SQL query

# db_cursor.execute("CREATE DATABASE my_firs")

# get list of all databases
result = db_cursor.execute("SHOW DATABASES;")
print(result)
#print all databases

# print(db_cursor)
# for db in db_cursor:
# 	print(db)
