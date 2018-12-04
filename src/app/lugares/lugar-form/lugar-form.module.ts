import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LugarModule } from '../lugar/lugar.module';
import { LugarFormComponent } from './lugar-form.component';

@NgModule({
  declarations: [LugarFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    LugarModule
  ]
})
export class LugarFormModule { }
