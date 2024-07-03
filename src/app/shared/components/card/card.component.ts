import { Component, Input, input } from '@angular/core';
import { Movie } from '../../../movies/interfaces/movie.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
   @Input()
   public movie!:Movie;

   @Input()
   public smallCard!: boolean;
}
