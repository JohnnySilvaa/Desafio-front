import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaComponent } from './sala.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SalaComponent],
  imports: [
    CommonModule,
    HttpClientModule

  ],
  exports: [ SalaComponent ]

})
export class SalaModule { }
