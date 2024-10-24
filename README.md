# Acciones basicas

Aca van a estar exlicadas las acciones basicas necesarias para poder levantar y usar el proyecto desde cero.




## Como levantarlo para desarrollar

Clonar el proyecto. Esta accion la pueden hacer utilizando la utilidad de Visual Studio Code o con este comando parados en la carpeta de destino en power shell.

```bash
  git clone https://link-to-project
```

Si estan en la consola van a la carpeta (saltear este paso en Visual Studio)

```bash
  cd my-project
```

Instalar paquetes y dependencias (esto solo es necesario la primera vez o si hubo algun cambio en los paquetes y dependencias)

```bash
  npm install
```

Comenzar el servidor de desarrollo

```bash
  npm run dev
```


## Control de ramas con GitHub

La idea de esta seccion es mantener el control de trabajo y orden para no perder codigo cada vez que estamos juntando nuestras partes del trabajo. 

⚠️⚠️ **MUY IMPORTANTE SIEMPRE RECORDAR NUNCA HACER PUSH A MAIN** ⚠️⚠️

*Aclaracion menor*

Siempre que esten trabajando sobre el proyecto y tal vez no entiendan sobre que rama estan o como esta todo pueden utilizar este comando para fijarse.

```bash
  git status
```

### Como crear sus propias ramas

Fuera de estas aclaraciones la idea es trabajar siempre con copias de develop, entonces estando con el proyecto ir a la rama develop (desde la interfaz de visual studio esto se puede hacer tocando en la parte de abajo donde dice en que rama estas).

```bash
  git checkout develop
```

Estando en develop deben asegurarse de tener la ultima version del codigo disponible en GitHub. Entonces utilizamos el comando (tambien se puede utilizar la interfaz de visual studio).

```bash
  git pull
```

Entonces pueden crear una nueva rama utilizando el siguiente comando (tambien se puede utilizar la interfaz de visual studio).

```bash
  git checkout -b <nombre_de_la_rama>
```
*No se escriben los <> estos solo estan para mostrar donde se reemplaza*

Entonces ya estan trabajando en su propia rama donde cada vez que terminan de hacer algun cambio que no quieren perder se recomienda hacer un push. Para guardar los cambios usen la interfaz de visual studio que es mas facil de usar que la consola.

### Como volver a mergear con develop

Cuando terminan de trabajar en su rama y quieren juntar su trabajo deben seguir los siguientes pasos. (Todas las acciones que estoy mostrando aca se pueden hacer a traves de la interfaz de visual studio, no lo voy a aclarar siempre busquen como hacerlo xd)

Primero volver a develop y actualizarla por si hubieron cambios.

```bash
  git checkout develop
  git pull
```

Teniendo la ultima version de develop vuelven a su rama.

```bash
  git checkout <nombre_de_la_rama>
```

Y aca mergean su rama con develop para solucionar potenciales errores en su rama antes de subirla a develop. 

```bash
  git merge develop
```

Si surgen errores los solucionan. Cuando este todo resuelto suben la nueva version de su rama incluyendo la nueva version de develop. 

Una vez terminados estos pasos pueden ir a la rama develop nuevamente.

```bash
  git checkout develop
```
Y estando aca con este comando traen los contenidos de su rama a develop para terminar el trabajo que estaban realizando. 

```bash
  git merge <nombre_de_la_rama>
```


## En caso de dudas o problemas

Si tienen alguna duda con respecto a cualquiera de estos pasos, preguntenme o elaboren un buen prompt para que ChatGPT les de una buena solucion.

Si estan trabajando con el codigo y de repente tienen un error (algo no funciona como deberia, se les pone toda la pantalla en blanco o les salta algun error de react) lo primero que tienen que hacer es ir a la consola del navegador y ver que error les aparece. Lo mejor que pueden hacer es investigar por su cuenta de esta manera para aprender. Teniendo estos errores de la consola pueden intentar interpretarlos de alguna forma como:

- Interpretando el mesaje (aveces los mensajes son faciles de enteder y les pueden dar una idea de que hacer)
- Buscando en google (seguro stack overflow tiene alguna solucion)
- Copiar el error copiar el codigo y darselo a ChatGPT con un buen prompt
- Preguntarme a mi (no hay problema)

> *Uso de IA*

No hay ningun problema que usen ChatGPT o cualquier variante para programar todo lo que tienen que hacer, les puede llegar a solucionar todo en un solo prompt. Pero en el caso de usar intenten enteder lo que estan haciendo para que no sea al pedo programar e intenten siempre explicar detalladamente el problema cosa de que esta IA no les de cualquier verdura. Un ejemplo de prompt podria ser:


Estoy trabajando en un proyecto con <describir tecnologia de trabajo (ejemplo react)>. Estoy haciendo < lo que sea que estes haciendo> y necesito ayuda con un problema. <Aca descripcion del problema (usar todo el texto que sea necesario) y si le vas a pasar codigo decile que codigo le estas pasando> < Codigo con el que estas trabajando que queres que modifique>



## Suerte

Rompan todo no hay problema si se equivocan :)


