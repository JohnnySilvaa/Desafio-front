import { Component, OnInit, Input } from '@angular/core';
import { Sala } from '../../sala/Sala';
import { Router } from '@angular/router';
import { SalaService } from '../../sala/sala.service';
import { Sessao } from 'src/app/sessoes/sessao/sessao';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {
SalaComponent

  salas: Sala[];
  sessoes: Sessao[];

  constructor(private router: Router, private salaService: SalaService) { }

  ngOnInit() {
    this.salaService.getSalas()
    .subscribe( data => {
      this.salas = data;
    });
  }

  listaSessoes(id: string): void{
      this.router.navigate(['sessao-lista',id]);
  }

  deleteSala(sala: Sala): void {
    this.salaService.deleteSala(sala.id)
      .subscribe( data => {
        this.salas = this.salas.filter(s => s !== sala);
      })
  };

  addSala(): void {
    this.router.navigate(['add-sala']);
  };


  editSala(sala: Sala): void {
    localStorage.removeItem("editSalaId");
    localStorage.setItem("editSalaId", sala.id.toString());
    this.router.navigate(['edit-sala']);
  };


listaLugares(salaId: string){
  this.router.navigate(['lugar-lista',salaId]);
}
}