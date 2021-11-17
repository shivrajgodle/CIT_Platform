import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],

})
export class HomepageComponent implements OnInit {



  ngOnInit() {
    this.primengConfig.ripple = false;
  }


    visibleSidebar1:any;


    constructor(private primengConfig: PrimeNGConfig) {}


}
