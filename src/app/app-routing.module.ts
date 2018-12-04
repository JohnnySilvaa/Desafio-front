import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmeListaComponent } from './filmes/filme-lista/filme-lista.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { FilmeFormComponent } from './filmes/filme-form/filme-form.component';
import { FilmeEditComponent } from './filmes/filme-edit/filme-edit.component';
import { SessaoListaComponent } from './sessoes/sessao-lista/sessao-lista.component';
import { SalaListaComponent } from './salas/sala-lista/sala-lista.component';
import { SalaFormComponent } from './salas/sala-form/sala-form.component';
import { SalaEditComponent } from './salas/sala-edit/sala-edit.component';
import { SessaoFormComponent } from './sessoes/sessao-form/sessao-form.component';
import { LugarListaComponent } from './lugares/lugar-lista/lugar-lista.component';
import { LugarFormComponent } from './lugares/lugar-form/lugar-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'filme-lista',
    component: FilmeListaComponent
  },
  { 
    path: 'add-filme', 
    component: FilmeFormComponent,
  },
  {
    path: 'edit-filme',
    component: FilmeEditComponent 
},
{
  path: 'sala-lista',
  component: SalaListaComponent
},
{
  path: 'add-sala',
  component: SalaFormComponent
},

{
  path: 'edit-sala',
  component: SalaEditComponent
},

{ 
  path: 'sessao-lista/:id',
  component: SessaoListaComponent

},

{
path: 'add-sessao',
component: SessaoFormComponent

},


{ 
  path: 'lugar-lista/:salaId',
  component: LugarListaComponent
},
{
  path: 'add-lugar/:salaId',
  component: LugarFormComponent
  },


  { 
    path: '**', 
    component: NotFoundComponent, 
  },     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
