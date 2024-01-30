import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DrinkCardComponent } from '../shared/drink-card.component';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { UIConfigService } from '../../services/ui-config.service';
import { IDrinksResponse } from '../../utils/drinks.interface';

@Component({
  selector: 'app-all-drinks',
  template: `
  <div class="items-container">
  <!--100 items not an issue at all but can be @defer for larger sets-->
  @for(drink of data.drinks; track drink.idDrink){
    <app-drink-card 
    [isDetailsPageMode]="false"
    [isCatalogMode]="true"
    [title]="drink.strDrink" 
    [drinkId]="drink.idDrink" 
    [isSocialSharingSupported]="isSocialSharingSupported"
    (navigateToDetails)="viewDetails(drink.idDrink)" 
    >
      <img class="drink-thumbnail" 
      [ngSrc]="drink.strDrinkThumb" 
      alt="drink-thumb" 
      width="200" 
      height="200" 
      priority="true">
    </app-drink-card>
    } @empty {
   <p> There are no items. </p>
 }
  </div>
    `, 
  imports: [DrinkCardComponent, NgOptimizedImage], 
  standalone: true,
})
export class AllDrinksComponent implements OnInit{
  public data!: IDrinksResponse; 
  public isSocialSharingSupported!: boolean;
  private readonly router = inject(Router);
  private readonly apiService = inject(ApiService);
  private readonly uiConfigService = inject(UIConfigService);

  ngOnInit(): void {
    this.isSocialSharingSupported = this.uiConfigService.isSocialSharingSupported;
      //Note: No disposal is needed 
      this.apiService.fetchAllDrinks().subscribe({
        next: (response: IDrinksResponse)=> {
          this.data = response
        },
        error: ()=> {
          //TODO: handle Error
        }
      })
  }

  viewDetails(drinkId: string): void {
    this.router.navigateByUrl(`/drinks/${drinkId}`)
  }
}
