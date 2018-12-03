import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SessaoService } from '../sessao/sessao.service';
import { Filme } from 'src/app/filmes/filme/filme';
import { FilmeService } from 'src/app/filmes/filme/filme.service';
import { Sala } from 'src/app/salas/sala/Sala';
import { Sessao } from '../sessao/sessao';
import { SalaService } from 'src/app/salas/sala/sala.service';

@Component({
  selector: 'app-sessao-form',
  templateUrl: './sessao-form.component.html',
  styleUrls: ['./sessao-form.component.css']
})
export class SessaoFormComponent implements OnInit {
  filmes: Filme[];
  sala: Sala = new Sala();
  sessao: Sessao = new Sessao();
  filme: Filme = new Filme();
  salaId: string;
  

  constructor(
    private router: Router, private sessaoService: SessaoService, 
    private filmeService: FilmeService,
    private salaService: SalaService,
    ) { }

  ngOnInit() {
   this.salaId = localStorage.getItem("addSalaId");
    
    this.filmeService.getFilmes()
    .subscribe( data => {
      this.filmes = data;
    });

     this.salaService.getSalaById(+this.salaId)
     .subscribe(data => {
       this.sala= data;
     })
  }


  getFilme(): void{
    let id = this.sessao.filme;
    this.filmeService.getFilme(+id)
    .subscribe(data => {
      this.onSubmit(data);
    });

  }

    onSubmit(filme:Filme) {

    this.sessao.filme = filme;
    this.sessao.sala = this.sala;
    this.sessao.preco = filme.preco + this.sala.preco;

    console.log(this.sessao);
    
    this.sessaoService.createSessao(this.sessao)
    .subscribe( data => {
      this.router.navigate(['sessao-lista',this.salaId]);
    });
    this.sessao = new Sessao();
    this.filme = new Filme();

  }

}
