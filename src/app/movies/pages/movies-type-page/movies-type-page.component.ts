import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, catchError, concatMap, map, Observable, of, switchMap, tap } from 'rxjs';
import { Movie } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';
import { CardComponent } from "../../../shared/components/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-type-page',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule
  ],
  templateUrl: './movies-type-page.component.html',
  styleUrl: './movies-type-page.component.css'
})
export class MoviesTypePageComponent implements OnInit{

   // BehaviorSubject para mantener el estado actual
   movies:Movie[] =[];
   movie$!: Observable<Movie[]> ; 
  public param: string = '';
  private page: number = 1;
  constructor(
    private route: ActivatedRoute,
    private service: MoviesService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(
      params =>{
        this.param = params['type'];
        if(params['type']=== 'Popular'){
          this.page = 1
         this.movie$ = this.service.getPopularMoviesByPage(this.page);
         this.loadMovies()
         
        }
        if(params['type']=== 'Now Playing'){
          this.page = 1
          this.movie$ = this.service.getNowMoviesByPage(this.page);
          this.loadMovies();
          
        }
        if(params['type']=== 'Upcoming'){
          this.page = 1
          this.movie$ = this.service.getUpcomingMoviesByPage(this.page);
          this.loadMovies();
        }
        if(params['type']=== 'Top Rated'){
          this.page = 1
          this.movie$ = this.service.getTopMoviesByPage(this.page);
          this.loadMovies();
        }
      }
    )
    
  }

  loadMore(){
    this.page++;
    if(this.param === 'Popular'){

      this.service.getPopularMoviesByPage(this.page).pipe(
        tap(newMovies => {
          this.movies = [...this.movies, ...newMovies]; // Actualiza el arreglo normal de películas
          
        })
      ).subscribe();
    }
    if(this.param === 'Now Playing'){
      this.service.getNowMoviesByPage(this.page).pipe(
        tap(newMovies => {
          this.movies = [...this.movies, ...newMovies]; // Actualiza el arreglo normal de películas
          
        })
      ).subscribe();
    }
    if(this.param === 'Upcoming'){
      this.service.getUpcomingMoviesByPage(this.page).pipe(
        tap(newMovies => {
          this.movies = [...this.movies, ...newMovies]; // Actualiza el arreglo normal de películas
          
        })
      ).subscribe();
    }
    if(this.param === 'Top Rated'){
      this.service.getTopMoviesByPage(this.page).pipe(
        tap(newMovies => {
          this.movies = [...this.movies, ...newMovies]; // Actualiza el arreglo normal de películas
          
        })
      ).subscribe();
    }
    
  }

  loadMovies() {
   this.movie$.subscribe(
    movies =>{
      this.movies = movies
    }
   )
    
  }
   
}
