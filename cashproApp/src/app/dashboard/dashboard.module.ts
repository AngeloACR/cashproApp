import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DialogAnimations } from './asociados/components/dialog/dialog.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DialogAnimations
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    SharedModule,
    MatDialogModule,
    MatSlideToggleModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {hasBackdrop: false}
    }
  ],
})
export class DashboardModule { }
