import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentsPharmacieComponent } from './medicaments-pharmacie.component';

describe('MedicamentsPharmacieComponent', () => {
  let component: MedicamentsPharmacieComponent;
  let fixture: ComponentFixture<MedicamentsPharmacieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentsPharmacieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentsPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
