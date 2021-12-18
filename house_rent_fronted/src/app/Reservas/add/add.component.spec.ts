import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHospedajeComponent } from './add.component';

describe('AddHospedajeComponent', () => {
  let component: AddHospedajeComponent;
  let fixture: ComponentFixture<AddHospedajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHospedajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHospedajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
