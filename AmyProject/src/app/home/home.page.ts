import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Camera,CameraOptions } from '@awesome-cordova-plugins/camera/ngx';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private camera:Camera) {}

  openCamera(){
  const options: CameraOptions = {
    quality:100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: true,
  }
  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    let base64Image = 'data:image/jpeg;base64,' + imageData;
   }, (err) => {
    // Handle error
   });
  }

}
