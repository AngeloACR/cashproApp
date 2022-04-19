import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagosRoutingModule } from './pagos-routing.module';
import { PagosComponent } from './pagos.component';
import { PasarelaComponent } from './containers/pasarela/pasarela.component';
import { CuotaComponent } from './containers/cuota/cuota.component';
import { ListaComponent } from './containers/lista/lista.component';
import { DetalleComponent } from './containers/detalle/detalle.component';


@NgModule({
  declarations: [
    PagosComponent,
    PasarelaComponent,
    CuotaComponent,
    ListaComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    PagosRoutingModule
  ]
})
export class PagosModule { }
