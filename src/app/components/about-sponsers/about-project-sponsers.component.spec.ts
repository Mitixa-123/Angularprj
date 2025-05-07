import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProjectSponsersComponent } from './about-project-sponsers.component';

describe('AboutProjectSponsersComponent', () => {
  let component: AboutProjectSponsersComponent;
  let fixture: ComponentFixture<AboutProjectSponsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutProjectSponsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutProjectSponsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
