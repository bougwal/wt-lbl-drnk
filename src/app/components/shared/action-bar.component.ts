import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-action-bar',
  template: `
    @if(isSocialSharingSupported) {
      <button 
      mat-icon-button 
      aria-label="fst-drl icon-button with heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <button 
      mat-icon-button  
      aria-label="fst-drl icon-button with share icon">
        <mat-icon>share</mat-icon>
      </button>
    }
    @if(isCatalogMode){
      <button 
      mat-icon-button  
      (click)="navigateToDetails.emit()" 
      aria-label="fst-drl icon-button with visibility icon">
      <mat-icon>visibility</mat-icon>
    </button>
    }
    @if(isDetailsPageMode) {
      <button 
      mat-icon-button  
      (click)="back.emit()"
      aria-label="fst-drl icon-button with arrow_back icon">
      <mat-icon>arrow_back</mat-icon>
    </button>
    }
  `, 
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
export class ActionBarComponent {
  @Input({required: true}) isCatalogMode = false;
  @Input({required: true}) isDetailsPageMode = false;
  @Input({required: true}) isSocialSharingSupported = false; 
  @Output() navigateToDetails = new EventEmitter<void>(); 
  @Output() back = new EventEmitter<void>()
}
