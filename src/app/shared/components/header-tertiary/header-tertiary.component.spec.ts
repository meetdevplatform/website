import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTertiaryComponent } from './header-tertiary.component';

describe('HeaderTertiaryComponent', () => {
  let component: HeaderTertiaryComponent;
  let fixture: ComponentFixture<HeaderTertiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTertiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTertiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
