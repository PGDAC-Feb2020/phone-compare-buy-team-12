import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedrealComponent } from './redreal.component';

describe('RedrealComponent', () => {
  let component: RedrealComponent;
  let fixture: ComponentFixture<RedrealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedrealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedrealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
