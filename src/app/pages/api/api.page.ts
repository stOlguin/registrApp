import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  pageTitle = 'api';
  isNotHome = true;
  characters: any;

  constructor(private route:Router, private navCtrl:NavController, private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character/')
    .subscribe(res=> {console.log(res);
    this.characters = res.results;
    })
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
