import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaFormComponent } from './sala-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SalaModule } from '../sala/sala.module';

@NgModule({
  declarations: [SalaFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SalaModule
  ]
})
export class SalaFormModule { }
