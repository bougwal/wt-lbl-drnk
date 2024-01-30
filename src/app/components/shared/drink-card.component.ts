import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActionBarComponent } from './action-bar.component';

@Component({
  selector: 'app-drink-card',
  template: `
    <mat-card class="fst-dr-card">
      <mat-card-header>
        <div mat-card-avatar class="fst-dr-image"></div>
        <mat-card-title>{{title}}</mat-card-title>
        <mat-card-subtitle> #{{drinkId}}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content class="fst-dr-content">
        <ng-content />
      </mat-card-content>
      <mat-card-actions>
         <app-action-bar 
          [isDetailsPageMode]="isDetailsPageMode"
         [isCatalogMode]="isCatalogMode" 
         [isSocialSharingSupported]="isSocialSharingSupported"
         (navigateToDetails)="navigateToDetails.emit()"
         (back)="back.emit()"
         />
      </mat-card-actions>
  </mat-card>
  `,
  standalone: true,
  imports: [MatCardModule, ActionBarComponent],
})
export class DrinkCardComponent {
  @Input({required: true}) title!: string; 
  @Input({required: true}) drinkId!: string;

  // The three @Input and the two event emitter should be simplified with content projection to avoid propagation of props/events
  @Input({required: true}) isCatalogMode = false;
  @Input({required: true}) isDetailsPageMode = false;
  @Input({required: true}) isSocialSharingSupported = false;
  @Output() navigateToDetails = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

}
