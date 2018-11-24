import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeModule } from '../filme/filme.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilmeEditComponent } from './filme-edit.component';

@NgModule({
  declarations: [FilmeEditComponent],
  imports: [
    CommonModule,
    FilmeModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports: [
    FilmeEditComponent,
],
})
export class FilmeEditModule { }
