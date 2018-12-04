import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarListaComponent } from './lugar-lista.component';
import { LugaresComponent } from './lugares/lugares.component';
import { RouterModule } from '@angular/router';
import { LugarModule } from '../lugar/lugar.module';

@NgModule({
  declarations: [
    LugarListaComponent,
    LugaresComponent],
  imports: [
    CommonModule,
    RouterModule,
    LugarModule
  ],
})
export class LugarListaModule { }
