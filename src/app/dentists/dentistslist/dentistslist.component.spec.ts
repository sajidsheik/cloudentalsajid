import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistslistComponent } from './dentistslist.component';

describe('DentistslistComponent', () => {
  let component: DentistslistComponent;
  let fixture: ComponentFixture<DentistslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentistslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentistslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
