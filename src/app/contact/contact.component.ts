import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  acceptPrivacyPolicy() {
    let checkboxPrivacy =  <HTMLInputElement> document.getElementById('checkboxPrivacy');
    let checkboxTest =  <HTMLInputElement> document.getElementById('checkboxTest');

    if(checkboxPrivacy.checked){
      checkboxTest.style.backgroundImage = "url('../../assets/img/icons/checkedCheckbox.png')";
    }

    if(!checkboxPrivacy.checked) {
      checkboxTest.style.backgroundImage = "url('../../assets/img/icons/defCheckbox.png')";
    }
  }
}
