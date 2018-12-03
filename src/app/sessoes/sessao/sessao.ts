import { Filme } from "src/app/filmes/filme/filme";
import { Sala } from "src/app/salas/sala/Sala";
import { Moment } from 'moment';
import { Time } from '@angular/common';

export class Sessao {
    id:string;
    horario : string;
    sala: Sala;
    filme:Filme;
    preco:string;
}