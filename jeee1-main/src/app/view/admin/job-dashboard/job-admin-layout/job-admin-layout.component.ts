import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-admin-layout',
  templateUrl: './job-admin-layout.component.html',
  styleUrls: ['./job-admin-layout.component.scss']
})
export class JobAdminLayoutComponent implements OnInit {
  opened: boolean = true;
 
  //  toggleSidebar() {
  //     this.opened = !this.opened;
  //   }
  constructor() { }

  ngOnInit(): void {
  }

}
