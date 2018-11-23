import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaListaComponent } from './sala-lista.component';
import { SalasComponent } from './salas/salas.component';
import { SalaModule } from '../sala/sala.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SalaListaComponent, 
    SalasComponent],
  imports: [
    CommonModule,
    SalaModule,
    RouterModule
  ]
})
export class SalaListaModule { }
