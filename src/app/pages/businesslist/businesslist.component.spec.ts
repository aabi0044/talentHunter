import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesslistComponent } from './businesslist.component';

describe('BusinesslistComponent', () => {
  let component: BusinesslistComponent;
  let fixture: ComponentFixture<BusinesslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
