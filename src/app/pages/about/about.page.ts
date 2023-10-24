import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  pageTitle = 'about';
  isNotHome = true;

  constructor(private route:Router, private navCtrl:NavController) { }

  ngOnInit() {
  }

  goHome(){
    this.route.navigate(['/home']);
  }

  goAbout(){
    this.route.navigate(['/about']);
  }

  goApi(){
    this.route.navigate(['/api']);
  }

}
