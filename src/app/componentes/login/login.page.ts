import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuarios } from 'src/app/modelos/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public migrupo1: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  usua:any;

  constructor(private router: Router, private fire:UsuarioService) {
  this.migrupo1 = this.crear();
}



crear() {
  return new FormGroup({
    direccion: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern(this.emailPattern)]),
    contraseña: new FormControl('', [Validators.required]),
  });
}
get direccion() { return this.migrupo1.get('direccion'); }
get cotraseña() { return this.migrupo1.get('contraseña'); }

  
  
  onLogin(){
    this.usua=this.migrupo1.value;
        if(this.migrupo1.valid){
          const uus:IUsuarios={
            email:this.usua.direccion,
            contra:this.usua.contraseña
          }
        this.fire.entra(uus);
        this.router.navigate(['si']);}
  }


    
}

