node-multicast
==============

Para correr los ejemplos

Instalar node.js
---------------

Vaya a [http://nodejs.org/download/](http://nodejs.org/download/) y descargue node.js para su sistema operativo.


Correr el código
-------------

1. Descague este código en [https://github.com/dominoFire/node-multicast/archive/master.zip](https://github.com/dominoFire/node-multicast/archive/master.zip)
2. Descomprima el archivo descargado (node-multicast-master.zip)
3. En su línea de comandos (consola), ingrese al directorio descomprimido y ejecute el receiver
```
$ cd node-multicast-master
$ node receiver.js
UDP Server listening on 0.0.0.0:10000
```
4. Luego, abra otra línea de comandos (consola), ingrese al directorio descomprimido y ejecute el sender
```
$ cd node-multicast-master
$ node sender.js
UDP message sent to 224.0.1.60:10000
```
5. Si ve la consola donde ejecutó el reciver (paso 3), tendrá que ver lo siguiente:
```
UDP Server listening on 0.0.0.0:10000
148.205.36.107:41039 - My KungFu is Good!
148.205.36.107:55486 - My KungFu is Good!
```
6. Con lo anterior, queda comprobado que sender o receiver envia y recibe mensajes.


Modificar el código
----------
En ambos códigos hay dos variables: `HOST` y `PORT`, las cuales se pueden modificar para cambiar la dirección y el puerto en donde se hace el multicast.

