import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MoviesTypePageComponent } from './pages/movies-type-page/movies-type-page.component';
import { SeriesTypePageComponent } from './pages/series-type-page/series-type-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

export const routes: Routes = [
   {
    path:'',
    component:LayoutPageComponent,
    children:[
      {
         path:'home',
         component:HomePageComponent
      },
      {
       path:'search/:searchTerm',
       component:SearchPageComponent
      },
      {
         path:'movie/:type',
         component: MoviesTypePageComponent
      },
      {
         path:'serie/:type',
         component: SeriesTypePageComponent
      },
      {
         path:'detail/:type/:id',
         component: DetailPageComponent
      },
      {
         path:'',
         redirectTo:'home',
         pathMatch:'full'
      }
    ]
   },
   {
     path: '**',
     redirectTo: ''
   }
];
