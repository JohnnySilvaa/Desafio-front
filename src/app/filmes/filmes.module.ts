import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeModule } from './filme/filme.module';
import { FilmeFormModule } from './filme-form/filme-form.module';
import { FilmeListaModule } from './filme-lista/filme-lista.module';
import { RouterModule, Routes } from '@angular/router';
import { FilmeEditModule } from './filme-edit/filme-edit.module';

@NgModule({

  imports: [
    CommonModule,
    FilmeModule,
    FilmeFormModule,
    FilmeListaModule,
    FilmeEditModule,
    RouterModule,


  ],

})
export class FilmesModule { }
