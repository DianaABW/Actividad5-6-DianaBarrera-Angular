import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc} from '@angular/fire/firestore';
import { IPedidos } from '../modelos/pedidos';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private fire:Firestore) { }

  addPedido(pedi:IPedidos){
    console.log('siiii');

    const refcol=collection(this.fire,'pedidos');
    addDoc(refcol,pedi)
    .then(()=>{console.log('exitoso');})
    .catch((err)=>{console.log(err);});


  }


}
