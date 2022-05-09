import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from './administracion.component';
import { ListaUsuariosComponent } from './containers/lista-usuarios/lista-usuarios.component';
import { PerfilComponent } from './containers/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: AdministracionComponent,
    children: [
      {
        path: 'perfil',
        component: PerfilComponent,
      },{
        path: '',
        component: ListaUsuariosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministracionRoutingModule {}
