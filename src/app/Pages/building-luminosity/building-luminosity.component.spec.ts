import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingLuminosityComponent } from './building-luminosity.component';

describe('BuildingLuminosityComponent', () => {
  let component: BuildingLuminosityComponent;
  let fixture: ComponentFixture<BuildingLuminosityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingLuminosityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingLuminosityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
