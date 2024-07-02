import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Movie } from '../../interfaces/movie.interface';

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
  public series$?:Observable<Movie[]>
 constructor(
  private movieServices:MoviesService
 ){}
  ngOnInit(): void {
   this.getPopularMovies()
   this.getPopularSeries()
  }

 getPopularMovies(){
  this.movies$ =this.movieServices.getPopularMovies()
  
 }

 getPopularSeries(){
  this.series$ = this.movieServices.getPopularSeries()
 }
}
