import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHabitacionComponent } from './add.component';

describe('AddHospedajeComponent', () => {
  let component: AddHabitacionComponent;
  let fixture: ComponentFixture<AddHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
