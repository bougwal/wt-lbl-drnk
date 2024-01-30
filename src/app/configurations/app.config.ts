import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

export const apiBaseUrl = "https://www.thecocktaildb.com/api/json/v1/1/"; 
export const appConfig: ApplicationConfig = {providers: [provideRouter(routes), provideAnimations(), provideHttpClient()]};
