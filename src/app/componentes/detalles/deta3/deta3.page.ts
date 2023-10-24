import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle3',
  templateUrl: './deta3.page.html',
})
export class Deta3Page {
  constructor(private router: Router) {}

  openDetailsWithState(){
    this.router.navigate(['compra']);
  }
}
