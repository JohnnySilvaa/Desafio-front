import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeModule } from '../filme/filme.module';
import { RouterModule } from '@angular/router';
import { FilmeEmCartazComponent } from './filme-em-cartaz.component';

@NgModule({
  declarations: [FilmeEmCartazComponent],
  imports: [
    CommonModule,
    FilmeModule,
    RouterModule
  ]
})
export class FilmeEmCartazModule { }
