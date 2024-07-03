import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroment.development';
import { Observable, map } from 'rxjs';
import { Movie, MovieResponse } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl = environment.baseUrl;
  private headers: HttpHeaders;
  private token = environment.token;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
  }

  getPopularMovies(): Observable<Movie[]> {
    const url = `${this.baseUrl}/movie/popular?language=en-US&page=1'`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });


    return this.http
      .get<MovieResponse>(url, { headers })
      .pipe(map((response: MovieResponse) => response.results));
  }

  getPopularSeries():Observable<Movie[]>{
    const url = `${this.baseUrl}/tv/popular?language=en-US&page=1'`
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<MovieResponse>(url,{headers})
    .pipe(map((response: MovieResponse) => response.results))
  }

  findAll(search:string){
   const url = `${this.baseUrl}/search/multi?query=${search}&include_adult=true&language=en-US&page=1`;
   const headers = new HttpHeaders({
    Accept: 'application/json',
    Authorization: `Bearer ${this.token}`,
  });
   return this.http.get<MovieResponse>(url,{headers})
   .pipe(map((response: MovieResponse) => response.results))
  }
}
