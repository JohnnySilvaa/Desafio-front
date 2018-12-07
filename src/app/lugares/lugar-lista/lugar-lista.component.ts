import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LugarService } from '../lugar/lugar.service';


@Component({
  selector: 'app-lugar-lista',
  templateUrl: './lugar-lista.component.html',
  styleUrls: ['./lugar-lista.component.css']
})
export class LugarListaComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute,private  router: Router, private lugarService: LugarService) { }
  
  salaId: string;
  map = new Map();

  ngOnInit(){
    
    this.salaId = this.activeRoute.snapshot.params['salaId'];

    this.lugarService.getLugares(this.salaId).subscribe(data =>{
      for(const [key,value] of Object.entries(data)) {
        this.map.set(key,value);
      }
    });

    }
}
