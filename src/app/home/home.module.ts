import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [ HomeComponent ]

})
export class HomeModule { }
