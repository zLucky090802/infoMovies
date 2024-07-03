import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Movie } from '../../interfaces/movie.interface';
import { CardComponent } from '../../../shared/components/card/card.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  public movies$?: Observable<Movie[]>;

  public series$?: Observable<Movie[]>;
  public myForm = this.form.group({
    searching: ['', Validators.required],
  });
  constructor(
    private movieServices: MoviesService,
    private form: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getPopularMovies();
    this.getPopularSeries();
  }

  getPopularMovies() {
    this.movies$ = this.movieServices.getPopularMovies();
  }
  findAll() {
    this.router.navigate(['/movies/search', this.myForm.value.searching]);
  }

  getPopularSeries() {
    this.series$ = this.movieServices.getPopularSeries();
  }
}
