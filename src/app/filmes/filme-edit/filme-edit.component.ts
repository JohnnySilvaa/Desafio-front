import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmeService } from '../filme/filme.service';
import { Filme } from '../filme/filme';
import {first} from "rxjs/operators";
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-filme-edit',
  templateUrl: './filme-edit.component.html',
  styleUrls: ['./filme-edit.component.css']
})
export class FilmeEditComponent implements OnInit {


  filme: Filme;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private filmeService: FilmeService) { }

  ngOnInit() {
    let filmeId = localStorage.getItem("editFilmeId");
    if(!filmeId) {
      alert("Invalid action.")
      this.router.navigate(['filme-lista']);
      return;
    }

     this.editForm = this.formBuilder.group({
      id: [''],
      nome: [''],
      genero: [''],
      duracao: [''],
      preco: [''],
    });

    this.filmeService.getFilme(filmeId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.filmeService.updateFilme(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['filme-lista']);
        },
        error => {
          alert(error);
        });
  }

}
