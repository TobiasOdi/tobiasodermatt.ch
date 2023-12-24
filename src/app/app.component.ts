import { HtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // wird von private auf public gesetzt, damit man auch von HTML darauf zugrieffen kann
  constructor(public translate: TranslateService, public router: Router) { 
    // this language will be used as a fallback when a translation isn't found in the current language
    //translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    //translate.use('en');
}
}
