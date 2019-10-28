# NodeJsTestDXC
PRUEBA DESARROLLADOR BACKEND NODEJS DXC TECHNOLOGY


Este proyecto muestra la creación de un Api Rest, Con NodeJs usando Express.

El proyecto está alojado en la App de Heroku para facilitar su prueba, Heroku utiliza este código expuesto en git para poder ejecutar la aplicación desde su servidor.
EndPoint De Heroku
https://apirestnodejsdxc.herokuapp.com/api/test

Otra forma de ejecutar la aplicación es instalar node js en el equipo local y clonar este proyecto en su equipo en el lugar que desee, posteriormente debe ir desde la consola de comando a la ruta del proyecto clonado y ejecutar el comando:
Npm start

La aplicación escuchara en el puerto :8080, con el siguiente endpoint
http://localhost:8080/api/test

Las pruebas unitarias están realizadas en una colección configuradas en la app de Postman
Puede acceder a la colección de pruebas desde este link:
https://www.getpostman.com/collections/ff4b1fdc87691ba35d0a
este link debe ser importado desde postman desde el apartado de Collection y importado desde formato link, después de agregado puede ejecutar la colección con el nombre de TestApiRestNodeJs, el cual se agregó desde la importación por ultimo dependiendo de donde va a ejecutar el proyecto, si es heroku o localmente, debe escoger el ambiente desde postman dentro de la colección, el environment es Heroku o Local.

Las pruebas se le envían al ws peticiones get con parámetros en forma de array numéricos o no numéricos
https://apirestnodejsdxc.herokuapp.com/api/test?array=300&array=2&array=2
ó
https://apirestnodejsdxc.herokuapp.com/api/test?array=300&array=2&array=letra

también hay test donde no se le envían parámetros o con una ruta inexistente.
