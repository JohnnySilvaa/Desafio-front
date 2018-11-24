import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme/filme';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmeService } from '../filme/filme.service';

@Component({
  selector: 'app-filme-lista',
  templateUrl: './filme-lista.component.html',
  styleUrls: ['./filme-lista.component.css']
})
export class FilmeListaComponent  implements OnInit{

  filmes: Filme[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmeService: FilmeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}

