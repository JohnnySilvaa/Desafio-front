import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaService } from '../sala/sala.service';
import { Sala } from '../sala/Sala';

@Component({
  selector: 'app-sala-lista',
  templateUrl: './sala-lista.component.html',
  styleUrls: ['./sala-lista.component.css']
})
export class SalaListaComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
   
  }

}
