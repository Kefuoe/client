import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineOneComponent } from './mine-one.component';

describe('MineOneComponent', () => {
  let component: MineOneComponent;
  let fixture: ComponentFixture<MineOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MineOneComponent]
    });
    fixture = TestBed.createComponent(MineOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
