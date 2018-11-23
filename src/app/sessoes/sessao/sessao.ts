import { Filme } from "src/app/filmes/filme/filme";
import { Sala } from "src/app/salas/sala/Sala";

export class Sessao {
    constructor(
        public id:string,
        public horario :string,
        public sala: Sala,
        public filme:Filme,
        public preco:string
    ) {}
}