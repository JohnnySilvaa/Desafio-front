import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoFormComponent } from './sessao-form.component';

describe('SessaoFormComponent', () => {
  let component: SessaoFormComponent;
  let fixture: ComponentFixture<SessaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
