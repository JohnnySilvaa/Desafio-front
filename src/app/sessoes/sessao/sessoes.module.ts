import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessaoListaComponent } from '../sessao-lista/sessao-lista.component';
import { SessaoFormComponent } from '../sessao-form/sessao-form.component';
import { SessaoComponent } from './sessao.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SessaoListaComponent, 
    SessaoFormComponent, 
    SessaoComponent],
    
  imports: [
    CommonModule,
    HttpClientModule

  ]
})
export class SessoesModule { }
