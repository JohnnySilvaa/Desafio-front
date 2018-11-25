import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme/filme.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from '../filme/filme';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent implements OnInit {


  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private filmeService: FilmeService) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [''],
      nome: [''],
      genero: [''],
      duracao: [''],
      preco: [''],
    });
  }

  onSubmit() {
    console.log(this.addForm.value);
    this.filmeService.createFilme(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['filme-lista']);
      });
  }
}
