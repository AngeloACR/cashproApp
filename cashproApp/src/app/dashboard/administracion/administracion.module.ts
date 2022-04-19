import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';
import { ListaUsuariosComponent } from './containers/lista-usuarios/lista-usuarios.component';
import { PerfilComponent } from './containers/perfil/perfil.component';


@NgModule({
  declarations: [
    AdministracionComponent,
    ListaUsuariosComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
