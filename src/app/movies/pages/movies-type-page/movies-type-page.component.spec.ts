import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesTypePageComponent } from './movies-type-page.component';

describe('MoviesTypePageComponent', () => {
  let component: MoviesTypePageComponent;
  let fixture: ComponentFixture<MoviesTypePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesTypePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
