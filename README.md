
## Instalacion

Node: v18.17.0

Ejecutar los comandos:

```bash
npm i
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).


## Situación

La fecha es 20 de marzo de 2015, trabajando en Reddit se le ocurre como
broma de "April fools day" realizar una sección de la página que contenga un botón grande
y un contador que indica una cantidad descendente de segundos.
El contador desciende de 60 segundos a 0 y solo se resetea si alguien con la página abierta
presiona el botón.
Solo se puede presionar una vez por usuario y cuando un usuario lo presiona le queda
asignado como recuerdo un color en función de esta tabla.
## Se pide
Que se realice una single page application que implemente la idea del botón
considerando los siguientes aspectos:
- El 'clickeo' del botón es una acción irreversible.
- Se desea evitar presiones accidentales.
- Al clickear se me asigna el color acorde a cuando clickie
- Simular clicks de otra gente: al abrir la página, se debe ver como el contador
desciende de 60 hasta algún número (aleatorio) y luego vuelve a 60.
Para alguien que abre la página debe parecer como que hay gente con la página abierta
clickeando el botón en momentos diversos.
Una vez que el usuario clickeó: Mostrarle al menos una estadística o visualización
relacionada a cuantos usuarios clickearon cada color
Visual
Una base de estilo y simetría. Fuentes, containers, colores, debe parecer una interfaz seria.
## Comentarios
Buscamos además código ordenado y legible. Levemente comentado mejor.
Si cierro la página y la reabro que no se olvide si presioné el botón.
Utilizar algún tipo de cookie o localStorage para guardar esa sesión. No es necesario
Implementar networking / sockets