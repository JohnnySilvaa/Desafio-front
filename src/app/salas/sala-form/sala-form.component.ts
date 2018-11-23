import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SalaService } from '../sala/sala.service';

@Component({
  selector: 'app-sala-form',
  templateUrl: './sala-form.component.html',
  styleUrls: ['./sala-form.component.css']
})
export class SalaFormComponent implements OnInit {


  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private salaService: SalaService) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [''],
      nome: [''],
      preco: [''],
    });
  }

  onSubmit() {
    this.salaService.createSala(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['sala-lista']);
      });
  }

}
