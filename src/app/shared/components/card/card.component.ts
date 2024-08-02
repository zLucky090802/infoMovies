import { Component, Input, input, OnInit } from '@angular/core';
import { Movie } from '../../../movies/interfaces/movie.interface';
import { CommonModule } from '@angular/common';
import { People, Knownfor } from '../../../movies/interfaces/person.interface';

@Component({
  selector: 'card',
  standalone: true,
  imports: [CommonModule,
    
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  public knowFor!:Knownfor;
  @Input()
  public movie!:Movie | null;

  @Input()
  public smallCard!: boolean;

  @Input()
  public person! : People ;
  ngOnInit(): void {
     
   }
  
}
