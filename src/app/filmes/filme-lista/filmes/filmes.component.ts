import { Component, OnInit, Input} from '@angular/core';
import { Filme } from '../../filme/filme';
import { FilmeService } from '../../filme/filme.service';
import { FilmeListaComponent } from '../filme-lista.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent  implements OnInit{

  constructor(private filmeService: FilmeService, private router: Router) { }

 filmes: Filme[];

  ngOnInit(){

    this.filmeService.getFilmes()
    .subscribe( data => {
      this.filmes = data;
    });
  }


  
deleteFilme(filme: Filme): void {
  this.filmeService.deleteFilme(filme.id)
    .subscribe( data => {
      this.filmes = this.filmes.filter(f => f !== filme);
    })
};

editFilme(filme: Filme): void {
  localStorage.removeItem("editFilmeId");
  localStorage.setItem("editFilmeId", filme.id.toString());
  this.router.navigate(['edit-filme']);
};


addFilme(): void {
  this.router.navigate(['add-filme']);
};
      
   
  }


