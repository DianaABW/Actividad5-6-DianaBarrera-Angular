import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { IPedidos } from 'src/app/modelos/pedidos';
import { PedidoService } from '../../services/pedido.service'
@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html'
})
export class CompraPage  {
    public migrupo1: FormGroup;
    private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    pedido:any;
  constructor(private router: Router, private fire:PedidoService ) {
    this.migrupo1 = this.crearMiFormulario();
  }
  get codigo() { return this.migrupo1.get('codigo'); }
  get nombre() { return this.migrupo1.get('nombre'); }
  get direccion() { return this.migrupo1.get('direccion'); }


  crearMiFormulario() {
    return new FormGroup({
      codigo: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      direccion: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern(this.emailPattern)]),
    });
  }
  salvarFormulario(): void {
    this.pedido=this.migrupo1.value;
    if(this.migrupo1.valid){
      const pedi:IPedidos={
        documento: this.pedido.codigo,
        nombre:this.pedido.nombre,
        email:this.pedido.direccion
      }
    this.fire.addPedido(pedi);
    this.router.navigate(['detacompra']);
    }
    
    
   //codigo de firebase para agregar
  }

}

