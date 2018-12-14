import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeEmCartazComponent } from './filme-em-cartaz.component';

describe('FilmeEmCartazComponent', () => {
  let component: FilmeEmCartazComponent;
  let fixture: ComponentFixture<FilmeEmCartazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeEmCartazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeEmCartazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
