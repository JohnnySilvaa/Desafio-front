import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessoesComponent } from './sessoes/sessoes.component';
import { SessaoListaComponent } from './sessao-lista.component';
import { RouterModule } from '@angular/router';
import { SessaoModule } from '../sessao/sessao.module';
import { SalaModule } from 'src/app/salas/sala/sala.module';

@NgModule({
  declarations: [
    SessoesComponent,
    SessaoListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SessaoModule,
    SalaModule

  ]
})
export class SessaoListaModule { }
