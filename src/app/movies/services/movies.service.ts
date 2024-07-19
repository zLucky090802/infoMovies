import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroment.development';
import { Observable, map } from 'rxjs';
import { Movie, MovieResponse } from '../interfaces/movie.interface';
import { detail, detailSerie } from '../interfaces/detail.interface';
import { Video } from '../interfaces/video.interface';

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

  getMovieDetailsById(id:number){
    const url = `${this.baseUrl}/movie/${id}'`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<detail>(url, { headers })
    
  }

  getVideosMovieById(id:number){
    const url = `${this.baseUrl}/movie/${id}/videos`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<Video>(url, { headers })
    
  }

  getVideosSerieById(id:number){
    const url = `${this.baseUrl}/tv/${id}/videos`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<Video>(url, { headers })
    
  }

  getSerieDetailsById(id:number){
    const url = `${this.baseUrl}/tv/${id}'`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<detailSerie>(url, { headers })
    
  }

  getPopularSeriesByPage(page:number){
    const url = `${this.baseUrl}/tv/popular?language=en-US&page=${page}'`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<MovieResponse>(url, { headers })
    .pipe(map((response: MovieResponse) => response.results));
  }

  getOnAirSeriesByPage(page:number){
    const url = `${this.baseUrl}/tv/on_the_air?language=en-US&page=${page}'`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<MovieResponse>(url, { headers })
    .pipe(map((response: MovieResponse) => response.results));
  }

  getAiringSeriesByPage(page:number){
    const url = `${this.baseUrl}/tv/airing_today?language=en-US&page=${page}'`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<MovieResponse>(url, { headers })
    .pipe(map((response: MovieResponse) => response.results));
  }

  getTopSeriesByPage(page:number){
    const url = `${this.baseUrl}/tv/top_rated?language=en-US&page=${page}'`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<MovieResponse>(url, { headers })
    .pipe(map((response: MovieResponse) => response.results));
  }

  getPopularMovies(): Observable<Movie[]> {
    const url = `${this.baseUrl}/movie/popular?language=en-US&page=1'`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<MovieResponse>(url, { headers })
    .pipe(map((response: MovieResponse) => response.results));
  }

  getPopularMoviesByPage(page:number):Observable<Movie[]>{
    const url = `${this.baseUrl}/movie/popular?language=en-US&page=${page}'`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<MovieResponse>(url, { headers })
    .pipe(map((response: MovieResponse) => response.results));
  }

  getNowMoviesByPage(page:number){
    const url = `${this.baseUrl}/movie/now_playing?language=en-US&page=${page}'`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<MovieResponse>(url, { headers })
    .pipe(map((response: MovieResponse) => response.results));
  }

  getUpcomingMoviesByPage(page:number){
    const url = `${this.baseUrl}/movie/upcoming?language=en-US&page=${page}'`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<MovieResponse>(url, { headers })
    .pipe(map((response: MovieResponse) => response.results));
  }

  getTopMoviesByPage(page:number){
  const url = `${this.baseUrl}/movie/top_rated?language=en-US&page=${page}'`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<MovieResponse>(url, { headers })
    .pipe(map((response: MovieResponse) => response.results));
  }


  getPopularSeries(): Observable<Movie[]> {
    const url = `${this.baseUrl}/tv/popular?language=en-US&page=1'`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    return this.http
      .get<MovieResponse>(url, { headers })
      .pipe(map((response: MovieResponse) => response.results));
  }

  findAll(search: string): Observable<MovieResponse> {
    const url = `${this.baseUrl}/search/multi?query=${search}&include_adult=true&language=en-US&page=1`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<MovieResponse>(url, { headers });
  }

  findSerie(search: string): Observable<MovieResponse> {
    const url = `${this.baseUrl}/search/tv?query=${search}&include_adult=true&language=en-US&page=1`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<MovieResponse>(url, { headers });
  }
  findSerieByPage(search: string, page: number) {
    const url = `${this.baseUrl}/search/tv?query=${search}&include_adult=true&language=en-US&page=${page}`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<MovieResponse>(url, { headers });
  }

  findMovieByPage(search: string, page: number) {
    const url = `${this.baseUrl}/search/movie?query=${search}&include_adult=true&language=en-US&page=${page}`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<MovieResponse>(url, { headers });
  }

  findMovie(search: string) {
    const url = `${this.baseUrl}/search/movie?query=${search}&include_adult=true&language=en-US&page=1`;
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<MovieResponse>(url, { headers });
  }
}
