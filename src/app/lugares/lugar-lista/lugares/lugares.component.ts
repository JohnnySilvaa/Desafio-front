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

  ngOnInit() {
  }

  addLugar(){

    this.router.navigate(['add-lugar', this.salaId])
  }

}
