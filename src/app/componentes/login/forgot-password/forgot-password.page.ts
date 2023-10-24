import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html'
})
export class ForgotPasswordPage {
  constructor(private router: Router) {}
  onResetPassword(){
    this.router.navigate(['login']);
  }
  
}
