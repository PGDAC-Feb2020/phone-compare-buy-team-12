import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedsamComponent } from './redsam.component';

describe('RedsamComponent', () => {
  let component: RedsamComponent;
  let fixture: ComponentFixture<RedsamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedsamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedsamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
