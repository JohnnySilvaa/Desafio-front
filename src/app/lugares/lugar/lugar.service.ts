import { Injectable } from '@angular/core';
import { Lugar } from './lugar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api/lugares';
  baseUrlSala: string = 'http://localhost:8080/api/salas';

 map= new Map();

  getLugares(salaId: string){
    return this.http.get<Map<string,Lugar[]>>(this.baseUrlSala + '/' + salaId+'/lugares');
  }

  getLugarById(id: number) {
    return this.http.get<Lugar>(this.baseUrl + '/' + id);
  }

  addLugarSala(salaId: number, lugar: Lugar) {
    return this.http.put(this.baseUrl + '/' + salaId, lugar);
  }

  deleteLugar(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
