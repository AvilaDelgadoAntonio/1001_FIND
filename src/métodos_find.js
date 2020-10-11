db.películas.find()
db.películas.find ({"Director": "James Cameron"})
db.películas.find ({"Director": {$eq: "John Ford"}})
db.películas.find ({"premios": 4})