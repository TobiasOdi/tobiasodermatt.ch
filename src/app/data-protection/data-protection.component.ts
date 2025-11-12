import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss']
})
export class DataProtectionComponent {
  @Input() checkDataprotection = false;
  
  showDataprotection() {
    if(this.checkDataprotection == false) {
      this.checkDataprotection = true;
    } else if(this.checkDataprotection == true) {
          this.checkDataprotection = false;
    }
  }
}
