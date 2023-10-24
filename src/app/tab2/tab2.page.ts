import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private r: Router) {}
  openDetailsWithState1() {
    this.r.navigate(['deta1']);
  }
  openDetailsWithState2() {
    this.r.navigate(['deta2']);
  }
  openDetailsWithState3() {
    this.r.navigate(['deta3']);
  }
}
