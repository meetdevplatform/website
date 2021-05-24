import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardHorizontalComponent } from './project-card-horizontal.component';

describe('ProjectCardHorizontalComponent', () => {
  let component: ProjectCardHorizontalComponent;
  let fixture: ComponentFixture<ProjectCardHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCardHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
