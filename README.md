## Readme Conexa Challenge

### Descripcion de la APP
    Este backend para iniciar requiere que se haga la descarga de los paquetes necesarios para su funcionamiento se detalla los pasos :
        - La version de node es la v18
        - se debe instalar los paquetes previos y librerias con el comando `npm install`
        - las bases de datos estan en dos nubes distintas las mismas se encuentran en la .env (a efectos de esta prueba se subio el .env en el repositorio solo por comodidad, es claramente sabido que es una mala practica enviar variables en los commits y push)
        - con el comando `npm run start:dev` podrian iniciar el backend del repositorio
        - la descripcion de los endpoints estan en el swagger disponible en la url http://localhost:3000/api/docs#

#### A efectos del challenge no esta disponible un endpoint para crear usuarios administradores:

    se facilitan credenciales de usuarios previamente creados
`{
"email": "user.administrator@gmail.com",
"password": "He123456"    
}`

`{
"email": "user.administrator2@gmail.com",
"password": "He123456"    
}`