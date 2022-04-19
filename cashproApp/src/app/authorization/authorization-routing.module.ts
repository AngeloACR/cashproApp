import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';
import { LoginComponent } from './containers/login/login.component';
import { RecuperarComponent } from './containers/recuperar/recuperar.component';
import { RegistroComponent } from './containers/registro/registro.component';
import { RestaurarComponent } from './containers/restaurar/restaurar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'restaurar', component: RestaurarComponent },
  { path: 'recuperar', component: RecuperarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizationRoutingModule {}
