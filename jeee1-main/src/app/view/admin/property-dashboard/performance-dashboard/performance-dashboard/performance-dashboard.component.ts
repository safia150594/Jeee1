import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-dashboard',
  templateUrl: './performance-dashboard.component.html',
  styleUrls: ['./performance-dashboard.component.scss']
})
export class PerformanceDashboardComponent implements OnInit {
  cityList:any =['Dubai','Sharjah','Ajman','Ras Al Khaimah','Umm Al Quwain','Abu Dhabi','Al Ain','Fujairah','Al Napoca'];
  LocationList:any =['Dubai','Sharjah','Ajman','Ras Al Khaimah','Umm Al Quwain','Abu Dhabi','Al Ain','Fujairah','Al Napoca'];
 
  viewDashboard:any=[
    {city:'',location:'',searchTitle:'',locationsubcatogery:'',searchdate:'',citycatogory:''}
  ];
  reset(){
    this.viewDashboard={};
  }
  constructor() { }

  ngOnInit(): void {
  }

}
