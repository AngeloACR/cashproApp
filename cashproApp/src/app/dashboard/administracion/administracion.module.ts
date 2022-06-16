import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';
import { ListaUsuariosComponent } from './containers/lista-usuarios/lista-usuarios.component';
import { PerfilComponent } from './containers/perfil/perfil.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AdministracionComponent,
    ListaUsuariosComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule ,
    AdministracionRoutingModule,
    SharedModule,

    MatTableModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class AdministracionModule { }
