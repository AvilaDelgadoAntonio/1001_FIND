Proyecto en el que se crea una colección relacionada con el tema de **películas** para usar el método *FIND*
* Si usamos esta sintaxis del método *FIND*: **db.peliculas.find()**,
    * Recibimos el resultado todos los documentos de la colección "peliculas" de la base de datos en uso.
* Si usamos esta sintaxis del método *FIND*: **db.peliculas.find ({"Director": "James Cameron"})**,
    * Recibimos el resultado todas los documentos en los que el campo "Director" tenga el valor "James Cameron"