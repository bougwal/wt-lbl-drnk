import { Routes } from '@angular/router';
import { DrinkDetailsComponent } from '../components/feat/drink-details.component';
import { AllDrinksComponent } from '../components/feat/all-drinks.component';

export const routes: Routes = [
    {path: 'drinks', component:AllDrinksComponent, pathMatch: 'full'},
    {path: 'drinks/:id', component: DrinkDetailsComponent, pathMatch: 'full'}, 
    {path: '**', redirectTo:'drinks'}
];
