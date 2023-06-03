import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonsAnimationComponent } from './bottons-animation.component';

describe('BottonsAnimationComponent', () => {
  let component: BottonsAnimationComponent;
  let fixture: ComponentFixture<BottonsAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonsAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottonsAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
