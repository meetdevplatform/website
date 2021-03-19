import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSocialComponent } from './post-social.component';

describe('PostSocialComponent', () => {
  let component: PostSocialComponent;
  let fixture: ComponentFixture<PostSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
