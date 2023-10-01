import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineFiveComponent } from './mine-five.component';

describe('MineFiveComponent', () => {
  let component: MineFiveComponent;
  let fixture: ComponentFixture<MineFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MineFiveComponent]
    });
    fixture = TestBed.createComponent(MineFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
