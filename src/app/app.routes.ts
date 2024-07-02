import { Routes } from '@angular/router';
import { LayoutPageComponent } from './movies/pages/layout-page/layout-page.component';
import { HomePageComponent } from './movies/pages/home-page/home-page.component';
import { routes as MoviesRoutes } from './movies/movies.route';

export const routes: Routes = [
  {
   path:'movies',
   children:MoviesRoutes
  }

  
];
