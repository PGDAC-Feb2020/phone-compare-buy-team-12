import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnesamComponent } from './onesam.component';

describe('OnesamComponent', () => {
  let component: OnesamComponent;
  let fixture: ComponentFixture<OnesamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnesamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnesamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
