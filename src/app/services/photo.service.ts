import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Photo1 } from '../modelos/photo';
import { Filesystem, Directory} from '@capacitor/filesystem' 
import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private nombres_fotos: Photo1[] = [];
  private PHOTO_STORAGE = 'nombre_de_las_fotos';
    
  constructor() { }

  public async loadSaved(){
    const fotos_storage = await Preferences.get({
      key: this.PHOTO_STORAGE
    });
    this.nombres_fotos = JSON.parse((fotos_storage.value) || "[]");
    console.log("el arreglo nombre fotos tiene");
    console.log(this.nombres_fotos)
    for(let photo of this.nombres_fotos)
    {
      const readFile = await Filesystem.readFile({
        path: photo.nombrearchivo,
        directory: Directory.Data
      });
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      photo.mensaje=photo.mensaje;
    }
  }

  public getPhotos(): Photo1[]{
    return this.nombres_fotos;
  }

  async addNewToGallery(mensaje:string){
    const capturedPhoto =  await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

  const saveImageFile =await this.guardarFotoEnMemoria(capturedPhoto, mensaje);
  console.log('valor de nombre fotos antes de unshift');
  console.log(this.nombres_fotos)
  this.nombres_fotos.unshift(saveImageFile);
  console.log('valor de nombre fotos despues de unshift');
  console.log(this.nombres_fotos);
  Preferences.set({
    key: this.PHOTO_STORAGE,
    value: JSON.stringify(this.nombres_fotos.map(turno => {
      const infoSerializada = { ...turno}
      delete infoSerializada.base64;
      return infoSerializada;
    }))
  })
  }
  private async guardarFotoEnMemoria(cameraPhoto: Photo,men:string){
    const base64Data = await this.readAsBase64(cameraPhoto);
    const fileName = new  Date().getTime() + '.jpeg';
    await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });
    return await this.getPhotoFile(cameraPhoto, fileName,men);
  }
  
   private async getPhotoFile(cameraPhoto: Photo, fileName: string,men:string): Promise<Photo1>{
    return{
      nombrearchivo: fileName,
      webviewPath: cameraPhoto.webPath,
      mensaje:men
    }
  }


  private async readAsBase64(cameraPhoto: Photo){
    const esa=cameraPhoto.webPath;
    const response = await fetch((esa) || "[]");
    const blob = await response.blob();
    return await this.convertBlobToBase64(blob) as string;
  }
  
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) =>{
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = ()=>{
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  })

  
}
