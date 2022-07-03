import { Component, OnInit } from '@angular/core';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  faDownload = faFileArrowDown;

  ngOnInit(){
    AOS.init();
    }

}
