import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTertiaryComponent } from './footer-tertiary.component';

describe('FooterTertiaryComponent', () => {
  let component: FooterTertiaryComponent;
  let fixture: ComponentFixture<FooterTertiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterTertiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTertiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
