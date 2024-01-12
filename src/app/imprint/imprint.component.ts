import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {
  @Input() checkImprint = false;
  
  showImprint() {
    if(this.checkImprint == false) {
      this.checkImprint = true;
    } else if(this.checkImprint == true) {
          this.checkImprint = false;
    }
  }
}
