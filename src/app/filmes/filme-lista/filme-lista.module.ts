import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeListaComponent } from './filme-lista.component';
import { FilmeModule } from '../filme/filme.module';
import { FilmesComponent } from './filmes/filmes.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FilmeListaComponent,
    FilmesComponent
  ],
  imports: [
    CommonModule,
    FilmeModule,
    RouterModule
  ]
})
export class FilmeListaModule { }
