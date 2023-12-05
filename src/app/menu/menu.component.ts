import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() darkMode = false;

  @Input() aboutMe = true;
  @Input() skillSet = false;
  @Input() portfolio = false

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
