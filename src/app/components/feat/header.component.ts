import { Component, HostBinding, HostListener, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UIConfigService } from '../../services/ui-config.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ActionBarComponent } from '../shared/action-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { IUIConfig } from '../../utils/ui-config.interface';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar>
  <button mat-icon-button aria-label="fst-drl icon-button with menu icon">
    <mat-icon>menu</mat-icon>
  </button>
  <span>Welcome to Eliq quick drink</span>
    <span class="fst-drl-spacer"></span>
    <app-action-bar [isCatalogMode]="false" [isDetailsPageMode]="false"  [isSocialSharingSupported]="isSocialSharingSupported"/>
  </mat-toolbar> `,
   standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, AsyncPipe, ActionBarComponent],
  styles: [
    `
    mat-toolbar {
      background: var(--headerBackground); 
      color: var(--headerTextColor)
    }
    `
  ]
})
export class HeaderComponent {
 
  readonly isSocialSharingSupported!: boolean;
  private readonly uiConfigService = inject(UIConfigService);

  @HostBinding('style.--headerBackground') headerBackground!: string; 
  @HostBinding('style.--headerTextColor') headerTextColor!: string; 

  constructor(){
    this.headerBackground = this.uiConfigService.getColorSetting('headerBackground');
    this.headerTextColor = this.uiConfigService.getColorSetting('headerTextColor'); 
    this.isSocialSharingSupported = this.uiConfigService.isSocialSharingSupported;
  }
}
