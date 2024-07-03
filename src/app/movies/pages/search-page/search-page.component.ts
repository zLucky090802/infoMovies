import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movie.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent implements OnInit{
  private search!:string;
  public movie$!: Observable<Movie[]>;

  constructor(
    private route:ActivatedRoute,
    private movieService: MoviesService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.search = params['searchTerm']
      
      
    })
    this.find(this.search);
  }

  find(search:string){
    this.movie$ = this.movieService.findAll(this.search)
  }

}
