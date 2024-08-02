import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { People, PeopleResponse } from '../../interfaces/person.interface';
import { Observable, of, tap } from 'rxjs';
import { CardComponent } from '../../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-people-page',
  standalone: true,
  imports: [CardComponent, CommonModule,RouterLink],
  templateUrl: './people-page.component.html',
  styleUrl: './people-page.component.css',
})
export class PeoplePageComponent implements OnInit {
  public page: number = 1;
  public peopleResponse!: PeopleResponse;
  public people: People[] = [];
  public people$!: Observable<People[]>;
  ngOnInit(): void {
    this.service.getPopularPeopleByPage(this.page).subscribe((people) => {
      console.log(people.results);
      this.peopleResponse = people;
      this.people$ = of(this.peopleResponse.results);
      this.loadPeople();
    });
  }

  constructor(private service: MoviesService) {}

  loadMore() {
    this.page++;
    this.service.getPopularPeopleByPage(this.page).pipe(
      tap(newPeople => {
        this.people = [...this.people, ...newPeople.results]; // Actualiza el arreglo normal de películas
        
      })
    ).subscribe();
  }

  loadPeople() {
    this.people$.subscribe((people) => {
      this.people = people;
    });
  }
}
