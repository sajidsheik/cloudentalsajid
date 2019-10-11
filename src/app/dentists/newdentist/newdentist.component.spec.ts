import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdentistComponent } from './newdentist.component';

describe('NewdentistComponent', () => {
  let component: NewdentistComponent;
  let fixture: ComponentFixture<NewdentistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdentistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdentistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
