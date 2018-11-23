import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaEditComponent } from './sala-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalaModule } from '../sala/sala.module';

@NgModule({
  declarations: [SalaEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SalaModule

  ]
})
export class SalaEditModule { }
