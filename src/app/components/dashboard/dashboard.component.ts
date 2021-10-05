import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceService  } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private myService: ApiServiceService) { }

  ngOnInit() {
    this.getData();
  }


  getData(){
    this.myService.get(environment.USERDATA).subscribe(response => {
      console.log(response,'-----data')
    })
  }
}
