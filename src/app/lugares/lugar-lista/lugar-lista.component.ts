import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LugarService } from '../lugar/lugar.service';
import { Lugar } from '../lugar/lugar';

@Component({
  selector: 'app-lugar-lista',
  templateUrl: './lugar-lista.component.html',
  styleUrls: ['./lugar-lista.component.css']
})
export class LugarListaComponent implements OnInit {

  lugares: Lugar[] = [];
  constructor(private router: Router, private lugarService: LugarService) { }

  ngOnInit() {
    this.lugarService.getLugares()
    .subscribe( data => {
      this.lugares = data;
    });
  }

}
