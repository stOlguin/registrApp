import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  pageTitle = 'home';
  isNotHome = false;
  router = inject(Router);

  constructor(private navCtrl:NavController) {}

  ngOnInit(): void {
  }


  goHome(){
    this.router.navigate(['/home']);
  }

  goAbout(){
    this.router.navigate(['/about']);
  }

  goApi(){
    this.router.navigate(['/api']);
  }

  async getPicture(){
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri
    });
  }

  onClickLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    console.log('alo')
  }

}