import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle1',
  templateUrl: './deta1.page.html',
})
export class Deta1Page {
  constructor(private router: Router) {}

  openDetailsWithState(){
    this.router.navigate(['compra']);
  }
}
