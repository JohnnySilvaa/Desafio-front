import { Filme } from "src/app/filmes/filme/filme";
import { Sala } from "src/app/salas/sala/Sala";

export class Sessao {
    id:string;
    horario :string;
    sala: Sala;
    filme:Filme;
    preco:string;
}