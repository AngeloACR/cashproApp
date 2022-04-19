#!/bin/bash
ng new cashproApp --style scss --routing true --force

cd cashproApp/

ng generate module authorization --route authorization --module app.module
ng generate module public --route public --module app.module
ng generate module dashboard --route dashboard --module app.module
ng generate module shared --route shared --module app.module

ng add @angular/material
npm i jwt-decode --save

cd src/app
cd ./authorization
    mkdir components
    mkdir containers
    mkdir services
    mkdir guards
    mkdir interceptors
    mkdir interfaces

    cd ./components
                
    cd ../containers                
        ng generate component login
        ng generate component registro

    cd ../services
        ng generate service authorization
    
    cd ../guards
        ng generate guard authorization
        ng generate guard admin
        ng generate guard cashproUser
    
    cd ../interceptors
        ng generate interceptor token
    
    cd ../interfaces
        ng generate interface user
        ng generate interface admin
        ng generate interface cashproUser
cd ../../public
    mkdir components
    mkdir containers
    mkdir services

    cd ./components
        ng g c bannerPrincipal
        ng g c bannerSecundario
        ng g c contacto
        ng g c equipo
        ng g c quienesSomos
        ng g c queHacemos
    cd ../containers                
        ng generate component landing
        ng generate component politicas

    cd ../services
        ng generate service public
    

cd ../../shared
    mkdir components
    mkdir containers

    cd ./components
        ng generate component loader
        ng generate component error
        ng generate component infoHeader
        ng generate component menuHeader
        ng generate component footer
        ng generate component sidemenu
        ng generate component confirm
                
    cd ../containers                
        ng generate component notFound

cd ../../dashboard
ng generate module asociados --route asociados --module dashboard.module
ng generate module pagos --route pagos --module dashboard.module
ng generate module administracion --route administracion --module dashboard.module
ng generate module notificaciones --route notificaciones --module dashboard.module

 cd ./asociados
    mkdir components
    mkdir containers
    mkdir services
    mkdir interfaces

    cd ./components
                
    cd ../containers                
        ng generate component oficina
        ng generate component arbol

    cd ../services
        ng generate service asociados
    
    cd ../interfaces
        ng generate interface arbol
        ng generate interface oficina

cd ../../pagos
    mkdir components
    mkdir containers
    mkdir services
    mkdir interfaces

    cd ./components
                
    cd ../containers                
        ng generate component pasarela
        ng generate component cuota
        ng generate component lista
        ng generate component detalle

    cd ../services
        ng generate service pagos
    
    cd ../interfaces
        ng generate interface pago

cd ../../administracion
    mkdir components
    mkdir containers
    mkdir services
    mkdir interfaces

    cd ./components
                
    cd ../containers
        ng generate component listaUsuarios
        ng generate component perfil

    cd ../services
        ng generate service pagos
    
    cd ../interfaces
        ng generate interface pagos



cd ../../notificaciones
    mkdir components
    mkdir containers
    mkdir services
    mkdir interfaces

    cd ./components
        ng generate component scroller
                
    cd ../containers
        ng generate component lista
        ng generate component detalle

    cd ../services
        ng generate service notificaciones
    
    cd ../interfaces
        ng generate interface notificacion



