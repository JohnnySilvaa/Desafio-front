import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarComponent } from './lugar/lugar.component';
import { LugarFormComponent } from './lugar-form/lugar-form.component';
import { LugarModule } from './lugar/lugar.module';
import { LugarFormModule } from './lugar-form/lugar-form.module';
import { LugarListaModule } from './lugar-lista/lugar-lista.module';

@NgModule({
  declarations: [],
  imports: [
    LugarModule,
    LugarFormModule,
    LugarListaModule
  ]
})
export class LugaresModule { }
