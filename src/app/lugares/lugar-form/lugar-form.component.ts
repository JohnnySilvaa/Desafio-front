import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LugarService } from '../lugar/lugar.service';

@Component({
  selector: 'app-lugar-form',
  templateUrl: './lugar-form.component.html',
  styleUrls: ['./lugar-form.component.css']
})
export class LugarFormComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,private formBuilder: FormBuilder,
    private router: Router, private lugarService: LugarService) { }


  salaId: number;
  addForm: FormGroup;

  ngOnInit() {

    this.salaId = this.activeRoute.snapshot.params['salaId'];

    this.addForm = this.formBuilder.group({
      id: [''],
      fileira: [''],
      posicao: [''],
    });
  }

  onSubmit() {
    console.log(this.addForm.value);
    this.lugarService.addLugarSala(this.salaId,this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['lugar-lista',this.salaId]);
      });
  }
  

}
