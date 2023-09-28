import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineThreeComponent } from './mine-three.component';

describe('MineThreeComponent', () => {
  let component: MineThreeComponent;
  let fixture: ComponentFixture<MineThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MineThreeComponent]
    });
    fixture = TestBed.createComponent(MineThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
