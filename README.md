# JavaScript-Total-Dia-13
En esta ocasión subo el ejercicio del día 13 del curso "JavaScript Total" que estoy tomando en Udemy. Esta primera vez solo satisfago los requisitos para la resolución del ejercicio, pienso retomarlo al terminar el curso para brindar una solución más estética y/o elaborada nun/✨

### Consigna
Primero vas a crear un documento html que muestre las cosas típicas como un logo, 
un título y los elementos de las cotizaciones, pero que solo contenga las etiquetas 
de cada elemento sin contenido, es decir vacías, para poder cargar su contenido vía código JavaScript. 

Lógicamente lo que sí deberás poner en las etiquetas es su ID para que luego lo podamos acceder desde JavaScript, 
a través de una función que podría llamarse cargarElementos, o algo así. 
Esto significa que el contenido visual se va a cargar de forma síncrona. 

Luego deberás escribir el código que se encargue de consultar a las API externas 
(las que te dejé enlazadas en los recursos de la lección), para poder acceder a los 3 datos que necesitas, 
y para esto vas a aplicar todo lo aprendido en el día de hoy. Puedes hacerlo usando los elementos async/await, 
y utilizando el método fetch o el objeto XMLHttpRequest, lo que a ti te haga sentir más cómodo. 
Yo en mi solución voy a aplicar uno para cada promesa, de modo que los veas a todos.

Una vez obtenida esta información, se debe mostrar en nuestra página HTML.

La idea de este proyecto es evidenciar cómo la información externa se carga de manera posterior 
(asincrónicamente) con respecto al contenido local del sitio, a pesar que ambos están definidos 
en el mismo código JavaScript. Esto probará cómo el sincronismo afecta en la forma de visualizar 
la información en nuestra página y los beneficios que eso nos aporta.

Por último, como frutilla del postre, y para resaltar aún más las virtudes del asincronismo, 
junto a los elementos html que se cargan al momento de abrirse la página en el navegador, 
vas a incluir una imagen de tipo gif como la que tienes en los recursos de esta lección, 
que solo sea visible mientras los datos se están procesando, y que desaparezca cuando la información esté completamente cargada. 
Este recurso ayuda a los usuarios a tolerar la espera, y también tienen un componente asincrónico 
ya que se pueden cargar al mismo tiempo que se procesan las demás operaciones.

### Pantallas de la web
Página cargando los resultados de las API
![Captura de pantalla (28)](https://github.com/Alejandro-Az/JavaScript-Total-Dia-13/assets/105530752/b44af5b7-e61b-439f-8244-75651b4090bf)

Página ya cargados los resultados
![resultados cargados](https://github.com/Alejandro-Az/JavaScript-Total-Dia-13/assets/105530752/7afac30d-7347-4912-ab30-be3e04104302)
