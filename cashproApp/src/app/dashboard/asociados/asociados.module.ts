import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsociadosRoutingModule } from './asociados-routing.module';
import { AsociadosComponent } from './asociados.component';
import { OficinaComponent } from './containers/oficina/oficina.component';
import { ArbolComponent } from './containers/arbol/arbol.component';


@NgModule({
  declarations: [
    AsociadosComponent,
    OficinaComponent,
    ArbolComponent
  ],
  imports: [
    CommonModule,
    AsociadosRoutingModule
  ]
})
export class AsociadosModule { }
