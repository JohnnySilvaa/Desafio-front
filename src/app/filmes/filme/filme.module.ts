import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilmeComponent } from './filme.component';

@NgModule({
    declarations: [FilmeComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ FilmeComponent ]
})
export class FilmeModule { }