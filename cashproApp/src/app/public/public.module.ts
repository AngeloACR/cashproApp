import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { BannerPrincipalComponent } from './components/banner-principal/banner-principal.component';
import { BannerSecundarioComponent } from './components/banner-secundario/banner-secundario.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { QueHacemosComponent } from './components/que-hacemos/que-hacemos.component';
import { LandingComponent } from './containers/landing/landing.component';
import { PoliticasComponent } from './containers/politicas/politicas.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';


@NgModule({
  declarations: [
    PublicComponent,
    BannerPrincipalComponent,
    BannerSecundarioComponent,
    ContactoComponent,
    EquipoComponent,
    QuienesSomosComponent,
    QueHacemosComponent,
    LandingComponent,
    NotFoundComponent,
    PoliticasComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
