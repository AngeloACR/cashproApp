import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './containers/landing/landing.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { PoliticasComponent } from './containers/politicas/politicas.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'politicas', component: PoliticasComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
