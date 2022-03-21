import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  jobSearch:any=[{search:''}];
  jobDashboard=[
    {account:'331',custService:'21',hospitality:'32',sales:'33',secretarial:'45',transportation:'65'}
  ];
  jobFeatured=[
      {salary:'AED 2,900-3, 000',role:'Accounting' ,jobCatogery:'Management Accountant',jobDesc:'Candidate should be able to do auditing,.',Exp:'1-3'},
      {salary:'AED 3,800-8,000',role:'Bank' ,jobCatogery:'Cashier',jobDesc:'Some quick txt dfsdf awec aedwef cqwedzscz qwedasdfsc...',Exp:'1-3'},
      {salary:'AED 8,600-9,000',role:'Web Developer' ,jobCatogery:'UI',jobDesc:'Some quick txt dfsdf awec aedwef cqwedzscz qwedasdfsc...',Exp:'1-3'},  
      {salary:'AED 3,900-7,000',role:'Cashier' ,jobCatogery:'Management Accountant',jobDesc:'Some quick txt dfsdf awec aedwef cqwedzscz qwedasdfsc...',Exp:'1-3'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
