import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsociadosComponent } from './asociados.component';
import { ArbolComponent } from './containers/arbol/arbol.component';
import { OficinaComponent } from './containers/oficina/oficina.component';

const routes: Routes = [
  {
    path: '',
    component: AsociadosComponent,
    children: [
      {
        path: 'arbol',
        component: ArbolComponent,
      },{
        path: '',
        component: OficinaComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsociadosRoutingModule { }
