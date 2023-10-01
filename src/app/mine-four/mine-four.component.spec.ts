import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineFourComponent } from './mine-four.component';

describe('MineFourComponent', () => {
  let component: MineFourComponent;
  let fixture: ComponentFixture<MineFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MineFourComponent]
    });
    fixture = TestBed.createComponent(MineFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
