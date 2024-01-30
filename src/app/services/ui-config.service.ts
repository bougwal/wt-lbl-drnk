import { Injectable } from "@angular/core";
import * as uiConfig from '../configurations/config.json'; 

@Injectable({
    providedIn: 'root'
})
export class UIConfigService {

     // turn it into a stream from a central place for convenience if we want to merge it with another async call response
    // It can be read from Env config like in A/B tests in the future to make the overall UI configurable.
   // public readonly uiConfig$ = of<IUIConfig>(uiConfig);


    public getColorSetting(name: string): string {
        switch (name) {
        case 'headerBackground':
        return uiConfig.headerThemeColor;
        case 'headerTextColor':
        return uiConfig.headerTextColor;
        }
        return 'white';
    }

    public  get isSocialSharingSupported(): boolean {
        return uiConfig.allowSocialSharing;
    }

    /**
     * Read more configs if to go with a service approach here 
     */

    /**
     * Another optimal way is to use injection token and based on the tenant or authentication/authrization ID 
     * The whole UI will be configured in one go using scss variables from a central place instead of multiple service 
     * injections. 
     * Since the requirements are not specified and there is not much time at hand pre-mature optimization are sub-optimal for now.
     */
    

}