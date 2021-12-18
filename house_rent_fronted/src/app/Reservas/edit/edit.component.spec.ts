import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHospedajeComponent } from './edit.component';

describe('EditHospedajeComponent', () => {
  let component: EditHospedajeComponent;
  let fixture: ComponentFixture<EditHospedajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHospedajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHospedajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
