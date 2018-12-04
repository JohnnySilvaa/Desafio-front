import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LugarService } from '../lugar/lugar.service';
import { Lugar } from '../lugar/lugar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lugar-lista',
  templateUrl: './lugar-lista.component.html',
  styleUrls: ['./lugar-lista.component.css']
})
export class LugarListaComponent implements OnInit {
  lugares= new Map<string,Lugar[]>();
  constructor(private activeRoute: ActivatedRoute,private  router: Router, private lugarService: LugarService) { }
  
   salaId: string;
   l: Lugar[] = [];

  ngOnInit(){
  
    

    this.salaId = this.activeRoute.snapshot.params['salaId'];

     this.lugarService.getLugares(this.salaId).subscribe(data =>{
      for(const [key,value] of Object.entries(data)) {
        this.lugares.set(key,value);
        this.l.push(value);
     }
    });
    console.log(this.l);

  }
}
