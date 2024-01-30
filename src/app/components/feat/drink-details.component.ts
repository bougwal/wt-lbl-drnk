import { Component, OnInit, inject} from '@angular/core';
import { DrinkCardComponent } from '../shared/drink-card.component';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IDrinkDetails, IDrinkDetailsResponse } from '../../utils/drinks.interface';
import { Location, NgOptimizedImage } from '@angular/common';
import { UIConfigService } from '../../services/ui-config.service';
import { MoreInformationComponent } from './more-info.component';

@Component({
  selector: 'app-drink-details',
  template: `
   @if(drinkDetails) {
    <app-drink-card 
    (back)="navigateToCatalog()"
    [title]="drinkDetails.strDrink" 
    [isDetailsPageMode]="true"
    [drinkId]="drinkId" [isCatalogMode]="false" 
    [isSocialSharingSupported]="isSocialSharingSupported" >
     <img 
     class="drink-thumbnail" 
     [ngSrc]="drinkDetails.strDrinkThumb" 
     alt="drink-thumb" width="200" height="200" priority="true">
     <app-more-info [drinkDetails]="drinkDetails"/>
    </app-drink-card >
   } @else{
    <p>Could not load details</p>
   }
    `,
  imports: [DrinkCardComponent, NgOptimizedImage, MoreInformationComponent],
  standalone: true,
})
export class DrinkDetailsComponent implements OnInit {

  public drinkDetails!: IDrinkDetails;
  public isSocialSharingSupported!: boolean;
  public readonly drinkId = inject(ActivatedRoute).snapshot.params['id']; 
  private readonly apiService = inject(ApiService); 
  private readonly uiConfigService = inject(UIConfigService);
  private readonly location = inject(Location); 
  

  ngOnInit(): void {
    this.apiService.fetchDrinkById(this.drinkId).subscribe({
        next: (res: IDrinkDetailsResponse)=> { this.drinkDetails = res['drinks'][0]},
        error: ()=> {
          //TODO: handle error
        }
      })
    this.isSocialSharingSupported = this.uiConfigService.isSocialSharingSupported;
  }

  navigateToCatalog(): void {
    this.location.back();
  }
}
