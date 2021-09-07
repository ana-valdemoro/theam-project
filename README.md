# Theam-project
Es una aplicación web en angular que permite visualizar el catálogo de productos de una tienda de ropa.
## Contenido	
Este proyecto tiene una rama principal (master) sobre la que se han ido añadiendo las funcionalidades y requisitos de la aplicación finalmente implementados.  
La estructura del proyecto se subdivide en las siguientes carpetas:  
•	**Providers:** contiene la lógica de peticiones HTTP a la API.  
•	**Models:** contiene la definición de estructuras de datos de la aplicación como puede ser los productos o categorias.  
•	**Services:** contiene métodos que nos permites normalizar o estandarizar los datos a un formato óptimo y funcional para la aplicación.  
•	**Pages:** contiene aquellos componentes que se muestran como pantalla principal de la aplicación.  
•	**Components:** formado por componentes más pequeños que ayudan a completar la vista de las páginas.  
•	**State:** contiene la clase CategoryState, que guarda el valor actual de la categoria actual, es decir, aquella a través de la cuál el usuario esta buscando productos.

## Requisitos funcionales
•	Visualizar las categorias de productos  
•	Filtrar las categorias de productos  
•	Navegar entre las diferentes páginas de la web.
## Requisitos no funcionales
•	Angular  
•	Cli de Angular  
•	Typescrip  
•	CSS: flex, grid y custom-properties  
•	Node.JS    
•	Angular material    
• Diseño adaptable a varias patanllas (responsive design)
## Instalación y ejecución

Segundo, se debe instalar todas las dependencias del proyecto, por lo que ejecutamos:
`npm install`
Tercero, ejecutamos la instrucción `npm start` para iniciar el proyecto.
## Notas
No se ha utilizado los endpoint: `countries`, `store` y `home`.

