import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinesListComponent } from './mines-list.component';

describe('MinesListComponent', () => {
  let component: MinesListComponent;
  let fixture: ComponentFixture<MinesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinesListComponent]
    });
    fixture = TestBed.createComponent(MinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
