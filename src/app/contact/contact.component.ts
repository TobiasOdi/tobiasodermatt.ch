import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() checkPrivacyPolicy = false;
  @Input() show = false;
  @Input() privacyChecked = false;
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('privacyField') privacyField!: ElementRef;
  @ViewChild('submitButton') submitButton!: ElementRef;

  
  acceptPrivacyPolicy() {
    if(this.privacyChecked === false) {
      this.privacyChecked = true;
    } else if(this.privacyChecked === true) {
      this.privacyChecked = false;
    }
  }

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let privacyField = this.privacyField.nativeElement;
    let submitButton = this.submitButton.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    privacyField.disabled = true;
    submitButton.disabled = true;

    let formData = new FormData(); 
    formData.append('name', nameField.value);
    formData.append('message', messageField.value);

    // Sendeanimation

    await fetch('https://formspree.io/f/mqkrkwra',
      {
        method: 'POST',
        body: formData
      }
    )

    // Text anzeigen Nachricht gesendet
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    privacyField.disabled = false;
    submitButton.disabled = false;

    nameField.value = "";
    emailField.value = "";
    messageField.value = "";
    privacyField.checked = false;

  }

  checkInvalidText() {
    let nameField = this.nameField.nativeElement;

    nameField.addEventListener('focus', function(){
      return true;
    });

/*     if(nameField.invalid && nameField.focus()) {
      return true;
    } else {
      return false;
    } */
  } 

  
  showPrivacyPolicy() {
    if(this.checkPrivacyPolicy == false) {
      this.checkPrivacyPolicy = true;
    } else if(this.checkPrivacyPolicy == true) {
          this.checkPrivacyPolicy = false;
    }
  }
}
