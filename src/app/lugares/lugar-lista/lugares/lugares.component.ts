import { Component, OnInit, Input } from '@angular/core';
import { Lugar } from '../../lugar/lugar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {


 @Input() map: Map<string,Lugar[]>;
  
  @Input() salaId: string;

  constructor(private router: Router) { }



  //object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
 // map = new Map([[2, 'foo'], [1, 'bar']]);

  ngOnInit() {

   // for (let value of Array.from(this.map.values())) {
    //  console.log(value);}
  }

  addLugar(){

    this.router.navigate(['add-lugar', this.salaId])
  }

}
