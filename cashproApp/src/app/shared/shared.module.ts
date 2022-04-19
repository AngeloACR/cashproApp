import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';
import { InfoHeaderComponent } from './components/info-header/info-header.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { ConfirmComponent } from './components/confirm/confirm.component';


@NgModule({
  declarations: [
    SharedComponent,
    LoaderComponent,
    ErrorComponent,
    InfoHeaderComponent,
    MenuHeaderComponent,
    FooterComponent,
    SidemenuComponent,
    ConfirmComponent
  ],
  exports: [
    LoaderComponent,
    ErrorComponent,
    InfoHeaderComponent,
    MenuHeaderComponent,
    FooterComponent,
    SidemenuComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
