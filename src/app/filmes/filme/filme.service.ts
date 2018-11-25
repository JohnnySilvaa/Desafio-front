import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private baseUrl = 'http://localhost:8080/api/filmes';

  constructor(private http: HttpClient, private _http: Http) { }

  
  getFilme(id: number) {
    return this.http.get<Filme>(this.baseUrl + '/' + id);
  }
  
  getFilmes() {
    return this.http.get<Filme[]>(this.baseUrl);
  }

  deleteFilme(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  updateFilme(filme: Filme) {
    return this.http.put(this.baseUrl + '/' + filme.id, filme);
  }

  createFilme(filme: Filme) {
    return this.http.post(this.baseUrl, filme);
  }
  

}
