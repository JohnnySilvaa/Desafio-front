import { Injectable } from '@angular/core';
import { Lugar } from './lugar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api/lugares';

  getLugares() {
    return this.http.get<Lugar[]>(this.baseUrl);
  }

  getLugarById(id: number) {
    return this.http.get<Lugar>(this.baseUrl + '/' + id);
  }

  createLugar(lugar: Lugar) {
    return this.http.post(this.baseUrl, lugar);
  }

  updateLugar(lugar: Lugar) {
    return this.http.put(this.baseUrl + '/' +lugar.id, lugar);
  }

  deleteLugar(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
