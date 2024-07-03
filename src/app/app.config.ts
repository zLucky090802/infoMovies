import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; 
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Otros proveedores si los tienes
    provideRouter(routes), // Otros proveedores si los tienes
    provideHttpClient(),
    provideAnimationsAsync(), // Agrega provideHttpClient aquí
  ]
};
