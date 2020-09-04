import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnerealComponent } from './onereal.component';

describe('OnerealComponent', () => {
  let component: OnerealComponent;
  let fixture: ComponentFixture<OnerealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnerealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnerealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
