import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import {first} from "rxjs/operators";

import { SalaService } from '../sala/sala.service';
import { Sala } from '../sala/Sala';

@Component({
  selector: 'app-sala-edit',
  templateUrl: './sala-edit.component.html',
  styleUrls: ['./sala-edit.component.css']
})
export class SalaEditComponent implements OnInit {


  sala: Sala;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private salaService: SalaService) { }

  ngOnInit() {
    let salaId = localStorage.getItem("editSalaId");
    if(!salaId) {
      alert("Invalid action.")
      this.router.navigate(['sala-lista']);
      return;
    }

     this.editForm = this.formBuilder.group({
      id: [''],
      nome: [''],
      preco: [''],
    });

    this.salaService.getSalaById(+salaId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.salaService.updateSala(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['sala-lista']);
        },
        error => {
          alert(error);
        });
  }
}