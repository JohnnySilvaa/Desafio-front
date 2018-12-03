import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LugarComponent } from './lugar.component';

@NgModule({
  declarations: [LugarComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [LugarComponent]
})
export class LugarModule { }
