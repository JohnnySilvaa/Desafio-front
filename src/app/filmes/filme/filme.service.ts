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

  
  getFilme(id: string) {
    return this.http.get<Filme>(this.baseUrl + '/' + id);
  }

  listaFilmes() {
    return this.http.get<Filme[]>(this.baseUrl);
  }

  listFromFilme(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteFilme(id: string): Observable<any> {
      return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });

  }
  updateFilme(filme: Filme) {
    return this.http.put(this.baseUrl + '/' + filme.id, filme);
  }

  createFilme(filme: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, filme);
  }

  update(id:string,filme: any){
    return this.http.put(`${this.baseUrl}/${id}`, filme)
  }
  

}
