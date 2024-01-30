import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { apiBaseUrl } from '../configurations/app.config';
import { IDrinkDetailsResponse, IDrinksResponse,  } from '../utils/drinks.interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private readonly http = inject(HttpClient);

  fetchAllDrinks(): Observable<IDrinksResponse> {
    return this.http.get<IDrinksResponse>(`${apiBaseUrl}filter.php/?a=Alcoholic`); 
  }

  fetchDrinkById(id: string): Observable<IDrinkDetailsResponse>{
    return this.http.get<IDrinkDetailsResponse>(`${apiBaseUrl}lookup.php?i=${id}`)
  }
}
