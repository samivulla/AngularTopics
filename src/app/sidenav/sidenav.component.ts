import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  topicsData = [];
  constructor() { }
  
  ngOnInit() {
    this.topicsData = [
      {
        name:'CustomDirectives'
      },
      {
        name:'CustomPipes'
      },
      {
        name:'SASS' 
      },
      {
        name:'RXJS'
      },
      {
        name:'HTTP INTERCEPTORS'
      },
      {
        name:'Error Handling'
      },
      {
        name:'Typescript'
      },
      {
        name:'Javascript'
      },
      {
        name:'Route Guards'
      },
      {
        name: 'Forms'
      }
    ]

    
  }

}
