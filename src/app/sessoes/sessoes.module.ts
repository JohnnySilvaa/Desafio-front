import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessaoListaComponent } from './sessao-lista/sessao-lista.component';
import { SessaoFormComponent } from './sessao-form/sessao-form.component';
import { SessaoComponent } from './sessao/sessao.component';
import { SessaoModule } from './sessao/sessao.module';
import { SessaoFormModule } from './sessao-form/sessao-form.module';
import { SessaoListaModule } from './sessao-lista/sessao-lista.module';

@NgModule({
  declarations: [],
  imports: [
    SessaoModule,
    SessaoFormModule,
    SessaoListaModule    
  ]
})
export class SessoesModule { }
