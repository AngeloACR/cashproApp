import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'asociados',
    loadChildren: () =>
      import('./asociados/asociados.module').then((m) => m.AsociadosModule),
  },
  {
    path: 'pagos',
    loadChildren: () =>
      import('./pagos/pagos.module').then((m) => m.PagosModule),
  },
  {
    path: 'administracion',
    loadChildren: () =>
      import('./administracion/administracion.module').then(
        (m) => m.AdministracionModule
      ),
  },
  {
    path: 'notificaciones',
    loadChildren: () =>
      import('./notificaciones/notificaciones.module').then(
        (m) => m.NotificacionesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
