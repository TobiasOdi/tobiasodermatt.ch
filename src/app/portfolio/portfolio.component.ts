import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
@Input() javaScriptProject = true;
@Input() angularProject = true;

  filterJavaScript() {
    this.angularProject = false;
    this.javaScriptProject = true;
  }

  filterAngular() {
    this.javaScriptProject = false;
    this.angularProject = true;
  }

  filterAll() {
    this.javaScriptProject = true;
    this.angularProject = true;
  }
}
