import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsometricDesignComponent } from './isometric-design.component';

describe('IsometricDesignComponent', () => {
  let component: IsometricDesignComponent;
  let fixture: ComponentFixture<IsometricDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsometricDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsometricDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
