import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDecriptionComponent } from './course-decription.component';

describe('CourseDecriptionComponent', () => {
  let component: CourseDecriptionComponent;
  let fixture: ComponentFixture<CourseDecriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDecriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDecriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
