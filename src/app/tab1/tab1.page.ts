import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  camera=1;
  constructor(private r: Router) {}


  openDetailsWithState() {
   
    this.r.navigate(['foto']);
  }

}
