import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeModule } from '../filme/filme.module';
import { RouterModule } from '@angular/router';
import { FilmeFormComponent } from './filme-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FilmeFormComponent],
  imports: [
    CommonModule,
    FilmeModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
    
  ],
  exports: [
    FilmeFormComponent,
],
})
export class FilmeFormModule { }
