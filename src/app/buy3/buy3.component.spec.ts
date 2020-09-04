import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buy3Component } from './buy3.component';

describe('Buy3Component', () => {
  let component: Buy3Component;
  let fixture: ComponentFixture<Buy3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buy3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buy3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
