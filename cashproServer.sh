#!/bin/bash
mkdir cashproServer
mv ./package.json ./cashproServer/package.json
cd cashproServer/

mkdir environments
mkdir webServer
mkdir auth
mkdir usuarios
mkdir oficina
mkdir pagos
mkdir admin

touch logging.js
touch errors.js
touch database.js
touch cronjobs.js

cd environments
    touch local.js
    touch test.jswebServerwebServerwebServerwebServer
    touch production.js

cd ../auth
    touch authServer.js
    mkdir controller
    mkdir models
    mkdir routes
    mkdir middlewares

    cd controller
        touch index.js
        touch main.js

    cd ../models
        touch index.js
        touch main.js
        
    cd ../routes
        touch index.js
        touch main.js

    cd ../middlewares
        touch index.js
        touch main.js


cd ../../usuarios
    touch usuariosServer.js
    mkdir controller
    mkdir models
    mkdir routes
    mkdir middlewares

    cd controller
        touch index.js
        touch main.js

    cd ../models
        touch index.js
        touch main.js
        touch administrador.js
        touch cliente.js
        
    cd ../routes
        touch index.js
        touch main.js

    cd ../middlewares
        touch index.js
        touch main.js


cd ../../webServer
    touch webServer.js
    mkdir public/
    cd public/

cd ../../oficina
    touch oficinaServer.js
    mkdir controller
    mkdir models
    mkdir routes
    mkdir middlewares

    cd controller
        touch index.js
        touch main.js

    cd ../models
        touch index.js
        touch main.js
        touch capitalizacion.js
        touch asociado.js
        touch oficina.js
        
    cd ../routes
        touch index.js
        touch main.js

    cd ../middlewares
        touch index.js
        touch main.js

cd ../../admin
    touch adminServer.js
    mkdir controller
    mkdir models
    mkdir routes
    mkdir middlewares

    cd controller
        touch index.js
        touch main.js

    cd ../models
        touch index.js
        touch main.js
        
    cd ../routes
        touch index.js
        touch main.js

    cd ../middlewares
        touch index.js
        touch main.js

cd ../../pagos
    touch pagosServer.js
    mkdir controller
    mkdir models
    mkdir routes
    mkdir middlewares

    cd controller
        touch index.js
        touch main.js

    cd ../models
        touch index.js
        touch main.js
        touch pago.js
        
    cd ../routes
        touch index.js
        touch main.js

    cd ../middlewares
        touch index.js
        touch main.js
