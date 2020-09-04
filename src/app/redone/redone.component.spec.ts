import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedoneComponent } from './redone.component';

describe('RedoneComponent', () => {
  let component: RedoneComponent;
  let fixture: ComponentFixture<RedoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
