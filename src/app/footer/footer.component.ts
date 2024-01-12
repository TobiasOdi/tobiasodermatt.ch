import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() checkImprint = false;
  
  showImprint() {
    if(this.checkImprint == false) {
      this.checkImprint = true;
    } else if(this.checkImprint == true) {
          this.checkImprint = false;
    }
  }
}

