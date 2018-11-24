import { Component, OnInit, Input } from '@angular/core';
import { Sessao } from '../../sessao/sessao';
import { ActivatedRoute, Router } from '@angular/router';
import { SessaoService } from '../../sessao/sessao.service';

@Component({
  selector: 'app-sessoes',
  templateUrl: './sessoes.component.html',
  styleUrls: ['./sessoes.component.css']
})
export class SessoesComponent implements OnInit {

 @Input() sessoes: Sessao[]= [];
 @Input() idSala: string;

 constructor(private router: Router, private sessaoService: SessaoService) { }

  ngOnInit() {
  }

  deleteSessao(sessao: Sessao): void {
    this.sessaoService.deleteSessao(sessao.id)
      .subscribe( data => {
        this.sessoes = this.sessoes.filter(s => s !== sessao);
      })
  };

  addSessao(): void {
    this.router.navigate(['add-sessao',this.idSala]);
  };


}
