import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeModule } from './filme/filme.module';
import { FilmeFormModule } from './filme-form/filme-form.module';
import { FilmeListaModule } from './filme-lista/filme-lista.module';
import { RouterModule, Routes } from '@angular/router';
import { FilmeEditModule } from './filme-edit/filme-edit.module';
import { FilmeEmCartazComponent } from './filme-em-cartaz/filme-em-cartaz.component';
import { FilmeDetalheModule } from './filme-detalhe/filme-detalhe.module';
import { FilmeEmCartazModule } from './filme-em-cartaz/filme-em-cartaz.module';

@NgModule({

  imports: [
    CommonModule,
    FilmeModule,
    FilmeFormModule,
    FilmeListaModule,
    FilmeEditModule,
    FilmeDetalheModule,
    FilmeEmCartazModule,
    RouterModule,


  ],


})
export class FilmesModule { }
