import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie,  } from '../../interfaces/movie.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  public movies$?:Observable<Movie[]>;
 constructor(
  private movieServices:MoviesService
 ){}
  ngOnInit(): void {
   this.getPopularMovies()
  }

 getPopularMovies(){
  this.movies$ =this.movieServices.getPopularMovies()
  
 }
}
