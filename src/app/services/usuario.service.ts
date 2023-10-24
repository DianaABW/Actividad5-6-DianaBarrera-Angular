import { Injectable } from '@angular/core';
import { Firestore, collection,doc, addDoc, getDoc, getFirestore} from '@angular/fire/firestore';
import { IUsuarios } from '../modelos/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  doc:any;
  constructor(private fire:Firestore) { }

  addUsuario(usu:IUsuarios){
    console.log('siiii');

    const refcol=collection(this.fire,'usuarios');
    addDoc(refcol,usu)
    .then(()=>{console.log('exitoso');})
    .catch((err)=>{console.log(err);});
  }

  async entra(usu:IUsuarios){
    //const docu=getFirestore();
    //const refcol= collection(docu, 'usuarios');
    //const trae= getDoc(refcol, usu.id);
    //console.log(trae.data);
  }




}
