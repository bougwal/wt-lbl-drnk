import { Component, Input } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IDrinkDetails } from '../../utils/drinks.interface';

@Component({
  selector: 'app-more-info',
  template: ` 
   <!--Can be build dynamically via a map rather with ngSwitch or for of / ngFor block-->
  <div class="translations-slider">
  <mat-slide-toggle #english>Read English Instruction</mat-slide-toggle>
  <mat-slide-toggle #espanol>Read Spanish Instruction</mat-slide-toggle>
  <mat-slide-toggle #dutch>Read Dutch Instruction</mat-slide-toggle>
  <mat-slide-toggle #french>Read French Instruction</mat-slide-toggle>
  </div>
  @if(english.checked){
   <p> {{drinkDetails.strInstructions}} </p>
  } @else if(espanol.checked){
   {{drinkDetails.strInstructionsES ?? 'No spanish instructions available for this drink'}}
  }
  @else if(dutch.checked){
   {{drinkDetails.strInstructionsDE ?? 'No dutch instructions available for this drink'}}
  }
  @else if(french.checked){
   {{drinkDetails.strInstructionsFR ?? 'No french instructions available for this drink'}}
  }
  `,
    imports: [MatSlideToggleModule],
    standalone: true,
})
export class MoreInformationComponent {
  @Input({required: true}) drinkDetails!: IDrinkDetails
}
