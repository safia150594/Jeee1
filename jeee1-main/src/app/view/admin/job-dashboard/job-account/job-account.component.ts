import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-account',
  templateUrl: './job-account.component.html',
  styleUrls: ['./job-account.component.scss']
})
export class JobAccountComponent implements OnInit {
jobAccount:any=[
  {image:'../../../../../assets/logo/j2.jpg',name:'noon',company:'du',phone:'123456',Address:'10 kutralam',city:'cbe'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
