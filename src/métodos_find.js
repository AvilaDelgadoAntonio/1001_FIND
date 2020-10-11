db.peliculas.find()
db.peliculas.find ({"Director": "James Cameron"})
db.peliculas.find ({"Director": {$eq: "John Ford"}})
db.peliculas.find ({"premios": "4"})