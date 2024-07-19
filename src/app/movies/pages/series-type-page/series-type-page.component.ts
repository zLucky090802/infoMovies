import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Movie } from '../../interfaces/movie.interface';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-series-type-page',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    RouterLink
  ],
  templateUrl: './series-type-page.component.html',
  styleUrl: './series-type-page.component.css'
})
export class SeriesTypePageComponent implements OnInit {
  
  public series:Movie[] =[];
  public param : string = '';
  public series$!: Observable<Movie[]>;
  private page: number = 1;

  constructor(
    private route: ActivatedRoute,
    private service: MoviesService
  ){}
  ngOnInit(): void {
    this.route.params.subscribe(
      param =>{
        this.param = param['type'];
        if(param['type'] === 'Popular'){

          this.series$ = this.service.getPopularSeriesByPage(this.page);
          this.loadSeries();
        }
        if(param['type'] === 'Airing Today'){

          this.series$ = this.service.getAiringSeriesByPage(this.page);
          this.loadSeries();
        }
        if(param['type'] === 'On the Air'){

          this.series$ = this.service.getOnAirSeriesByPage(this.page);
          this.loadSeries();
        }
        if(param['type'] === 'Top Rated'){

          this.series$ = this.service.getTopSeriesByPage(this.page);
          this.loadSeries();
        }
        
      }
    )
  }


  loadMore(){
    this.page++;
    if(this.param === 'Popular'){

      this.service.getPopularSeriesByPage(this.page).pipe(
        tap(newMovies => {
          this.series = [...this.series, ...newMovies]; // Actualiza el arreglo normal de películas
          
        })
      ).subscribe();
    }
    if(this.param === 'Airing Today'){
      this.service.getAiringSeriesByPage(this.page).pipe(
        tap(newMovies => {
          this.series = [...this.series, ...newMovies]; // Actualiza el arreglo normal de películas
          
        })
      ).subscribe();
    }
    if(this.param === 'On the Air'){
      this.service.getOnAirSeriesByPage(this.page).pipe(
        tap(newMovies => {
          this.series = [...this.series, ...newMovies]; // Actualiza el arreglo normal de películas
          
        })
      ).subscribe();
    }
    if(this.param === 'Top Rated'){
      this.service.getTopSeriesByPage(this.page).pipe(
        tap(newMovies => {
          this.series = [...this.series, ...newMovies]; // Actualiza el arreglo normal de películas
          
        })
      ).subscribe();
    }
    
  }


  loadSeries() {
    this.series$.subscribe(
     series =>{
      console.log('series')
       this.series = series
     }
    )
     
   }


}
