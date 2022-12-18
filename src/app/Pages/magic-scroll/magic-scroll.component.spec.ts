import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicScrollComponent } from './magic-scroll.component';

describe('MagicScrollComponent', () => {
  let component: MagicScrollComponent;
  let fixture: ComponentFixture<MagicScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
