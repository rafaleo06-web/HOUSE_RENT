import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHospedajeComponent } from './listar.component';

describe('ListarHospedajeComponent', () => {
  let component: ListarHospedajeComponent;
  let fixture: ComponentFixture<ListarHospedajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarHospedajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHospedajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
