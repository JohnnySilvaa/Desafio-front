import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessaoService } from '../sessao/sessao.service';
import { Sessao } from '../sessao/sessao';

@Component({
  selector: 'app-sessao-lista',
  templateUrl: './sessao-lista.component.html',
  styleUrls: ['./sessao-lista.component.css']
})
export class SessaoListaComponent implements OnInit {


  constructor(private activeRoute: ActivatedRoute, private router: Router, private sessaoService: SessaoService) { }

  salaId: string;
  sessoes: Sessao[];

  ngOnInit() {
    this.salaId = this.activeRoute.snapshot.params['id'];

    this.sessaoService.getSessoes(this.salaId)
    .subscribe( data => {
      this.sessoes = data;
    });
  }




}
