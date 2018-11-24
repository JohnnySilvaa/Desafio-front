import { NgModule } from '@angular/core';
import { SalaModule } from './sala/sala.module';
import { SalaFormModule } from './sala-form/sala-form.module';
import { SalaListaModule } from './sala-lista/sala-lista.module';
import { SalaEditComponent } from './sala-edit/sala-edit.component';
import { SalaEditModule } from './sala-edit/sala-edit.module';

@NgModule({
  imports: [
    SalaModule,
    SalaFormModule,
    SalaListaModule,
    SalaEditModule
  ],
})
export class SalasModule { }
