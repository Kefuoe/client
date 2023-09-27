import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineTwoComponent } from './mine-two.component';

describe('MineTwoComponent', () => {
  let component: MineTwoComponent;
  let fixture: ComponentFixture<MineTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MineTwoComponent]
    });
    fixture = TestBed.createComponent(MineTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
