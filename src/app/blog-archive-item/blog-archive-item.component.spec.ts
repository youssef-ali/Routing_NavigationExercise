import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArchiveItemComponent } from './blog-archive-item.component';

describe('BlogArchiveItemComponent', () => {
  let component: BlogArchiveItemComponent;
  let fixture: ComponentFixture<BlogArchiveItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogArchiveItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArchiveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
