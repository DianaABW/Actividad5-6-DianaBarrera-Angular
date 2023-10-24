import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Photo1 } from 'src/app/modelos/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.page.html'
})
export class FotoPage{
  public album: Photo1[] = [];
  mensaje: any;

  constructor(private fotoS:PhotoService){}

    public takePicture(): void{
        this.fotoS.addNewToGallery(this.mensaje) 
    }
    ngOnInit() {
        this.fotoS.loadSaved().then(() => {
        this.album= this.fotoS.getPhotos();
        })
    }
}
