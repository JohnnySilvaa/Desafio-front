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
  addForm: FormGroup;
  filmes: Filme[];
  idSala: string;
  idFilme: string;

  horario: string;
  sala: Sala;
  filme: Filme;
  preco: string;
  sessao;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private sessaoService: SessaoService, 
    private filmeService: FilmeService,
    private activeRoute: ActivatedRoute,
    private salaService: SalaService,
    ) { }

  ngOnInit() {
    this.idSala = this.activeRoute.snapshot.params['id'];

    this.filmeService.listaFilmes()
    .subscribe( data => {
      this.filmes = data;
    });

    this.addForm = this.formBuilder.group({
      id: [''],
      horario: [''],
      filme: [''],
      sala: [this.idSala],
      preco: ['']
    });

  }

  

  getSala(id: number){
    this.salaService.getSalaById(id)
    .subscribe( data => {
      this.sala = data;
      this.addForm.setValue(data);

    });
  }

  getFilme(id: string){
    this.filmeService.getFilme(id)
    .subscribe( data => {
      this.filme = data;
      console.log(this.filme);
    });
    console.log(this.filme);

  }

  setValuesSessao(){
    this.getFilme((this.addForm.value.filme));
    this.getSala((this.addForm.value.sala));
   // this.horario = this.addForm.value.horario;
    //this.preco = this.sala.preco + this.filme.preco;
  }

  createSessao(){
    this.setValuesSessao();

    this.sessao = new Sessao("",this.horario,this.sala,this.filme,this.preco);
    this.sessaoService.createSessao(this.sessao)
      .subscribe( data => {
        this.router.navigate(['sessao-lista',this.idSala]);
      });
  }
  
  onSubmit() {
    this.createSessao();
  }

}
