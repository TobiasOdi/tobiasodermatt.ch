import { Component, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  @Input() darkMode = false;
  languageChange = false;
  @Input() aboutMe = true;
  @Input() skillSet = false;
  @Input() portfolio = false;

  // wird von private auf public gesetzt, damit man auch von HTML darauf zugrieffen kann
  constructor(public translate: TranslateService) { 
    // this language will be used as a fallback when a translation isn't found in the current language
    //translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    //translate.use('en'); 
  }

  setLangValue() {
    if(this.languageChange == false) {
      this.translate.use('en');
      this.languageChange = true; 
    } else {
      this.translate.use('de');
      this.languageChange = false;
    }      
  }

  activeTab(acitveTab:any) {
    this.aboutMe = false;
    this.skillSet = false;
    this.portfolio = false

    if(acitveTab == 'aboutMe') {
      this.aboutMe = true;
    } 
    if(acitveTab == 'skillSet') {
      this.skillSet = true;
    } 
    if(acitveTab == 'portfolio') {
      this.portfolio = true;
    }
  }


}
