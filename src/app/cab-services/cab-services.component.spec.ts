import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabServicesComponent } from './cab-services.component';

describe('CabServicesComponent', () => {
  let component: CabServicesComponent;
  let fixture: ComponentFixture<CabServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
