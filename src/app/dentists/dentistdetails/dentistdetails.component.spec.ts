import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistdetailsComponent } from './dentistdetails.component';

describe('DentistdetailsComponent', () => {
  let component: DentistdetailsComponent;
  let fixture: ComponentFixture<DentistdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentistdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentistdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
