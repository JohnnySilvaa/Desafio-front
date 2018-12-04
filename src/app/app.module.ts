import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FilmesModule } from './filmes/filmes.module';
import { HomeModule } from './home/home.module';
import { ErrorsModule } from './errors/errors.module';

import { SessoesModule } from './sessoes/sessoes.module';
import { SalasModule } from './salas/salas.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LugaresModule } from './lugares/lugares.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    FilmesModule,
    HomeModule,
    ErrorsModule,
    SessoesModule,
    SalasModule,
    HttpClientModule,
    HttpModule,
    LugaresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
