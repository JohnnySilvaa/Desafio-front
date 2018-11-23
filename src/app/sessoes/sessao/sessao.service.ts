import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sessao } from './sessao';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api/sessoes';
  baseUrlSala: string = 'http://localhost:8080/api/salas';


  getSessoes(id: string){
    return this.http.get<Sessao[]>(this.baseUrlSala + '/' + id + '/sessoes');
  }

  deleteSessao(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  createSessao(sessao: Sessao) {
    return this.http.post(this.baseUrl, sessao);
  }
}
