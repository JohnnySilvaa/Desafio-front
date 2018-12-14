import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme/filme.service';
import { Router } from '@angular/router';
import { Filme } from '../filme/filme';

@Component({
  selector: 'app-filme-em-cartaz',
  templateUrl: './filme-em-cartaz.component.html',
  styleUrls: ['./filme-em-cartaz.component.css']
})
export class FilmeEmCartazComponent implements OnInit {

  constructor(private filmeService: FilmeService, private router: Router) { }
  filmes: Filme[];

  ngOnInit() {
    this.filmeService.getFilmes()
    .subscribe( data => {
      this.filmes = data;
    });
  }

}
