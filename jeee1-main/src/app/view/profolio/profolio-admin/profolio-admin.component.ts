import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profolio-admin',
  templateUrl: './profolio-admin.component.html',
  styleUrls: ['./profolio-admin.component.scss']
})
export class ProfolioAdminComponent implements OnInit {
  opened: boolean = true;
 
  //  toggleSidebar() {
  //     this.opened = !this.opened;
  //   }
  constructor() { }

  ngOnInit(): void {
  }

}
