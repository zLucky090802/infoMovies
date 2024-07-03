import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar-movies',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule,MatIconModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuItems = [
    { 
      name: 'Movies', 
      isOpen: false, 
      options: ['Popular', 'Now Playing', 'Upcoming', 'Top Rated']
    },
    { 
      name: 'Series', 
      isOpen: false, 
      options: ['Airing Today', 'On the Air', 'Popular', 'Top Rated']
    },
    { 
      name: 'People', 
      isOpen: false, 
      options: ['Popular People']
    }
  ];

  toggleMenu(item: any) {
    item.isOpen = !item.isOpen;

    // Cerrar otros menús abiertos
    this.menuItems.filter(menuItem => menuItem !== item).forEach(menuItem => menuItem.isOpen = false);
  }
}
