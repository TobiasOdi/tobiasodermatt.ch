import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  @Input() languageChangeMenu: boolean = false;
  @Output() languageChangeUpdate = new EventEmitter<boolean>(); 

  @Input() aboutMe = true;
  @Input() skillSet = false;
  @Input() portfolio = false;
  @Input() contact = false;
  @Input() mobileMenuOpenCheck = false;

  checkboxOne = document.getElementById('checkboxOne') as HTMLInputElement | null;
  checkboxTwo = document.getElementById('checkboxTwo') as HTMLInputElement | null;

  // wird von private auf public gesetzt, damit man auch von HTML darauf zugrieffen kann
  constructor(public translate: TranslateService) { 
    // this language will be used as a fallback when a translation isn't found in the current language
    //translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    //translate.use('en'); 
  }

setLangValue() {
    if(!this.languageChangeMenu) {
      this.translate.use('en');
      this.languageChangeMenu = true;
      this.languageChangeUpdate.emit(this.languageChangeMenu);

      if (this.checkboxOne != null && this.checkboxTwo != null) {
        this.checkboxOne.checked = true;
        this.checkboxTwo.checked = true;
      }

    } else if(this.languageChangeMenu) {
      this.translate.use('de');
      this.languageChangeMenu = false;
      this.languageChangeUpdate.emit(this.languageChangeMenu);

      if (this.checkboxOne != null &&this.checkboxTwo != null) {
        this.checkboxOne.checked = false;
        this.checkboxTwo.checked = false;
      }
    }      
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  activeTab(acitveTab:string) {
    this.aboutMe = false;
    this.skillSet = false;
    this.portfolio = false;
    this.contact = false;

    if(acitveTab == 'aboutMe') {
      this.aboutMe = true;
    } 
    if(acitveTab == 'skillSet') {
      this.skillSet = true;
    } 
    if(acitveTab == 'portfolio') {
      this.portfolio = true;
    }
    if(acitveTab == 'contact') {
      this.contact = true;
    }
    this.mobileMenuOpenCheck = false;
  }

  openMobileMenu() {
    if(this.mobileMenuOpenCheck == false) {
      this.mobileMenuOpenCheck = true; 
    } else if(this.mobileMenuOpenCheck == true) {
      this.mobileMenuOpenCheck = false;
    }   
  }
}
