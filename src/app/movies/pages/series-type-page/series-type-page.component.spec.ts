import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesTypePageComponent } from './series-type-page.component';

describe('SeriesTypePageComponent', () => {
  let component: SeriesTypePageComponent;
  let fixture: ComponentFixture<SeriesTypePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesTypePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
