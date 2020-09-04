import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealsamComponent } from './realsam.component';

describe('RealsamComponent', () => {
  let component: RealsamComponent;
  let fixture: ComponentFixture<RealsamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealsamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealsamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
