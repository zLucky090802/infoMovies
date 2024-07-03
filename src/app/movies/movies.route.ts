import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

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
