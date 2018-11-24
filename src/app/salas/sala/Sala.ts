import { Lugar } from "src/app/lugares/lugar/lugar";

    export class Sala{
        constructor(
            public id:string,
            public nome:string,
            public lugares: Lugar[] = [],
            public preco:string
        ) {}
    }
    
   