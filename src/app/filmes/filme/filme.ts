import { Time } from '@angular/common';
import 'moment-duration-format';
import { LocaleDataIndex } from '@angular/common/src/i18n/locale_data';
import { duration, Moment } from 'moment';

export class Filme {
        id:string;
        nome:string;
        duracao:number; 
        genero:string;
        preco:string;
}