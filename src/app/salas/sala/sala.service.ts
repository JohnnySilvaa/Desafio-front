import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sala } from './Sala';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api/salas';


  getSalas() {
    return this.http.get<Sala[]>(this.baseUrl);
  }

  getSalaById(id: number) {
    return this.http.get<Sala>(this.baseUrl + '/' + id);
  }

  createSala(sala: Sala) {
    return this.http.post(this.baseUrl, sala);
  }

  updateSala(sala: Sala) {
    return this.http.put(this.baseUrl + '/' + sala.id, sala);
  }

  deleteSala(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

}
