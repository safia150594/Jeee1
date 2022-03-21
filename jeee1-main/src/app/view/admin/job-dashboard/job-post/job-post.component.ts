import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss']
})
export class JobPostComponent implements OnInit {
  isFormSubmitted:any=false;
  workPolicy:any=[
    'Onsite','Hybrid','Remote','Any Policy'
  ];
  skillsList = ['UI','SQL',"PHP","mySQL","UX" ];
  empType = ['Full Time','Part Time','Freelancer','Seasonal','Temporary'];
  educationList = ['High school',"Bachelor's degree","Master's degree",'Professional','Associate Degree' ];
  careerLevel = ['High-Level','Mid-Level','Senior-Level','Junior-Level','Entry-level'];
  addjobpost:any=[
    {title:'1',company:'2',wrkPolicy:'3',jobDesc:'4',skills:'5',career:'6',minMonthlySalary:'7', maxMonthlySalary:'8',minWorkExp:'9',maxWorkExp:'10',education:'11',receiveCVBy:'12',minCompanySize:'13',maxCompanySize:'14',careerEmpLevel:'15',jobExpDate:'16'}
  ];

  dummyjobPost:any={};
  jobPost(isValid){
    this.isFormSubmitted=true;
    if(isValid){
      this. addjobpost.push(this.dummyjobPost);
      this.dummyjobPost ={}; 
      this.isFormSubmitted=false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
