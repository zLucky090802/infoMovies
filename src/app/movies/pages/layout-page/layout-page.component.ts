import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { routes } from '../../movies.route';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterOutlet,
    HomePageComponent,
    
  ],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

}
