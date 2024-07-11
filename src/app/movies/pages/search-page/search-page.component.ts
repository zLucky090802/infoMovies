import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie, MovieResponse } from '../../interfaces/movie.interface';
import { map, Observable, of, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export class SearchPageComponent implements OnInit {
  private search!: string;
  public selectedPageIndex!: number;
  public series: boolean = false;
  public movies: boolean = false;
  public people: boolean = false;
  public movieResponse$!: Observable<MovieResponse>;
  public movieResponse!: MovieResponse;
  public movieResponseSeries!: MovieResponse | null;
  public movieResponseMovie!: MovieResponse | null;
  public movie$!: Observable<Movie[]>;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.search = params['searchTerm'];
    });

    this.movieService.findMovie(this.search).subscribe((response) => {
      this.movieResponseMovie = response;
    });
    this.find(this.search);
    this.movieService.findSerie(this.search).subscribe((movieResponse) => {
      // this.movieResponse = movieResponse
      // this.movie$ = of (this.movieResponse.results)
      this.movieResponseSeries = movieResponse;
    });

    this.movieService.findMovie(this.search).subscribe((movieResponse) => {
      this.movieResponseMovie = movieResponse;
    });
  }

  find(search: string) {
    this.movieResponse$ = this.movieService.findAll(search);
    this.movieResponse$.subscribe((response) => {
      this.movieResponse = response; // Asigna el MovieResponse completo
      this.movie$ = this.movieResponse$.pipe(map((res) => res.results));
    });
  }

  findSeries() {
    // this.movieResponseSeries$ = this.movieService.findSerie(this.search);
    // this.movieResponseSeries$.subscribe((response) => {
    //   // Asigna el MovieResponse completo
    //   this.movie$ = this.movieResponseSeries$.pipe(map((res) => res.results));
    //   console.log(this.movie$);
    // });

    // this.movieResponse = movieResponse
    // this.movie$ = of (this.movieResponse.results)

    this.movie$ = of(this.movieResponseSeries!.results);

    this.people = false;
    this.movies = false;
    this.series = true;
  }

  findSeriesByPage(page: number) {
    this.selectedPageIndex = page;
    this.movieService
      .findSerieByPage(this.search, page + 1)
      .subscribe((movieResponse) => {
        this.movieResponseSeries = null;

        this.movieResponseSeries = movieResponse;
        this.movie$ = of(this.movieResponseSeries.results);
        console.log(this.movieResponseSeries);
      });
  }

  findMovieByPage(page: number) {
    this.selectedPageIndex = page;
    this.movieService
      .findMovieByPage(this.search, page + 1)
      .subscribe((movieResponse) => {
        this.movieResponseMovie = null;
        this.movieResponseMovie = movieResponse;
        this.movie$ = of(this.movieResponseMovie.results);
      });
  }

  findMovie() {
    this.movie$ = of(this.movieResponseMovie!.results);
    this.series = false;
    this.people = false;
    this.movies = true;
  }

  getPagesArray(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
}
