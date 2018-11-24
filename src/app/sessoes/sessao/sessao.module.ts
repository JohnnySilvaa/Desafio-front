import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessaoComponent } from './sessao.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SessaoComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SessaoModule { }
