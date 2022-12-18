import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeumorphismComponent } from './neumorphism.component';

describe('NeumorphismComponent', () => {
  let component: NeumorphismComponent;
  let fixture: ComponentFixture<NeumorphismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeumorphismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeumorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
