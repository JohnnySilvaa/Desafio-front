import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessaoFormComponent } from './sessao-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SessaoModule } from '../sessao/sessao.module';

@NgModule({
  declarations: [SessaoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SessaoModule
  ]
})
export class SessaoFormModule { }
