# Dev NodeJs MongoDb Esj

En este reporsitorio vamos a establecer una aplicacion con tecnologia nodeJs que permite segun las reglas de negocio genrar los registros y condiciones requeridas

## Comenzando 🚀

Tengamos en cuenta los prerequsitos que acontinuacion enumero para que todo valla bien


### Pre-requisitos 📋

Debemos tener instalado:
* MondolDB
* NodeJs
  * express
  * mongose(driver DB)
  * esj-mate (motor de plantilla)
  * connect-flash (Para enviar mensjes entre paginas)
  * morgan (ver las peticioens http que llegan al servidor)
  * passport (autenticacion oauth) 
  * passport-local (autenticacion en local) 
  * bcrypt-nodejs (para cifrar las contraseñas)
 *nodemon para refresh del server

### Estructura de las capetas


Controller: Persistencia hacia el repositorio de datos
Modelos: Dominios establecidos desde las Collecciones-Entity
Views: Las plantillas o html en esj
routes: insdex.js que contiene las url y trafica las vistas y las conefcta con los controller
passport: controller aislado para el manejo de usuario, cifrar las contraseñas etc
Carpeta raiz(src): contiene archivo 
  * database.js driver para conectarnos a mongoldb
  * key.js  url de la Db
  * server main para la aplicacion


### Fucionalidades del aplicativo:

* Tipos de roles de usuario. Rol Editor y Rol Lector
* El usuario Editor puede crear, editar, leer y borrar noticias
* El usuario lector solo puede leer noticias y marcarlas/desmarcarlas como favoritas
* Cualquier usuario editor puede editar y borrar cualquier noticia aunque no la haya creado él mismo.
* Ventana de registro con nombre de usuario, password y tipo de rol con el que se está registrando.
* Ventana de login única para ambos roles
* Ventana de ver noticias, ordenadas por orden de creación (la más nueva primero)
* Funcionalidad para crear una nueva noticia. solo disponible para el Rol Editor
* Funcionalidad para editar una noticia existente. solo disponible para el Rol Editor
* Funcionalidad para borrar una noticia existente. Rol Editor
* Funcionalidad para marcar una noticia como favorita. Solo para el Rol Lector
* Ventana donde el usuario lector pueda ver sus noticias favoritas.
* Funcionalidad de logout

En el archivo Togofy.pdf se describe las ventanas y vistas del aplicativo.


### Run del aplicativo:

* Clonar este repo https://github.com/devorozn/togofy.git
* Desde una terminar instalar las dependencias con "npm install"
* Ejcutar el comando run en dev "npm run dev"
* Desde un browser entrar ala url del aplicativo http://localhost:3000


## Autor ✒️

* **Juan Carlos Orozco N.** 😊

## Licencia 📄

05/2021



