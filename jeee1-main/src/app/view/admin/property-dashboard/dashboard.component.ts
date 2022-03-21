import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  max = 100;
  showWarning?: boolean;
  dynamic = 0;
  type: 'success' | 'info' | 'warning' | 'danger' = 'info';
  
  
  constructor() {
    this.random();
  }
  tabName="rent";
 tabChange(name){
   this.tabName=name;
 }
  random(): void {
    const value = Math.floor(Math.random() * 100 + 1);
    let type: 'success' | 'info' | 'warning' | 'danger';
 
    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }
 
    this.dynamic = value;
    this.type = type;
  }

  ngOnInit(): void {
  }

}
