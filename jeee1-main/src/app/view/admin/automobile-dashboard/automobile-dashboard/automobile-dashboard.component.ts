import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automobile-dashboard',
  templateUrl: './automobile-dashboard.component.html',
  styleUrls: ['./automobile-dashboard.component.scss']
})
export class AutomobileDashboardComponent implements OnInit {
  opened: boolean = true;
 
  // toggleSidebar() {
  //    this.opened = !this.opened;
  //  }
  constructor() { }

  ngOnInit(): void {
  }

}
