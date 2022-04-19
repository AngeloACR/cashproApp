import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificacionesRoutingModule } from './notificaciones-routing.module';
import { NotificacionesComponent } from './notificaciones.component';
import { ScrollerComponent } from './components/scroller/scroller.component';
import { ListaComponent } from './containers/lista/lista.component';
import { DetalleComponent } from './containers/detalle/detalle.component';


@NgModule({
  declarations: [
    NotificacionesComponent,
    ScrollerComponent,
    ListaComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    NotificacionesRoutingModule
  ]
})
export class NotificacionesModule { }
