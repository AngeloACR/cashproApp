import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './containers/lista/lista.component';
import { PasarelaComponent } from './containers/pasarela/pasarela.component';
import { PagosComponent } from './pagos.component';

const routes: Routes = [
  {
    path: '',
    component: PagosComponent,
    children: [
      {
        path: 'historial',
        component: ListaComponent,
      },{
        path: '',
        component: PasarelaComponent,
      },
    ],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagosRoutingModule { }
