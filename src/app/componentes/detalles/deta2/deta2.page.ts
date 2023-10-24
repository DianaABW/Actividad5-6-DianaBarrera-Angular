import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle2',
  templateUrl: './deta2.page.html',
})
export class Deta2Page {
  constructor(private router: Router) {}

  openDetailsWithState(){
    this.router.navigate(['compra']);
  }
}
