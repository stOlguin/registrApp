import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() pageTitle : string = "";
  @Input() isNotHome : boolean =true;
  router=inject(Router);

  constructor(private location: Location) { }

  ngOnInit() {}

  onClickBack(){
    this.location.back();
    console.log('alo')
  }
}
