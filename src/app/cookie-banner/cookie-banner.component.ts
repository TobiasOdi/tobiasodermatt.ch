import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent {

 /*  setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  }

  getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
      if(val.indexOf(name) === 0) value = val.substring(name.length);
    })

    return value;
  }

  document.querySelector("#cookies-btn").addEventlistener("click", () => {
    document.querySelector("#cookies").style.display = "none";
    this.setCookie("cookie", true, 30);
  })

  cookieMessage = () => {
    if(!this.getCookie("cookie"))
    document.querySelector("#cookies").style.display = "block";
  }

  window.addEventListener("load", this.cookieMessage); */

}
