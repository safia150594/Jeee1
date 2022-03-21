import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  LocationList:any =['Dubai','Sharjah','Ajman','Ras Al Khaimah','Umm Al Quwain','Abu Dhabi','Al Ain','Fujairah','Al Napoca'];
  typeList:any=['Job for Apply','Property for Sale','Property for Rent','Automobile for Sale','Automobile for Rent'];
  CategoriesList:any=['Account Executive','Fashion','Media','Architecture and Interior Design','graphic-design','sales',' Information Technology'];
  JobRoleList:any=['Account Executive','Fashion','Media','Architecture and Interior Design','graphic-design','sales',' Information Technology'];
  adsPost:any=['Today Executive','Within 3 Days','Media','Within 7 Days','Within 14 Days','Within 30 Days'];
  salayList:any=['0-1999','2000-3999','3000-4000','4000-5000','5000-6000','6000-7000','8000-9000','10000-12000','12000-15000','+50000'];
  minExpList:any=['1-2 years','2-5 years','5-10 years','10-15 years','15+ years'];
  minEduList:any=['High School','Secondary','Batchlor Degree','Master Degree','PhD'];
  empTypeList:any=['Full Time','Part Time','Contract','Temporary','Other'];
  sortLists:any=['Newest to Oldest','Oldest to Newest','Price Highest to Lowest','Price Lowest to Highest'];
  browserResultCar:any=[
    {job:'Account Executive'},
    {job:'Fashion'},
    {job:'Media'},
    {job:'Architecture and Interior Design '},
    {job:'Graphic Design'},
    {job:'Sales'},
    {job:'Information Technology '},
    {job:'Secretarial '},
    {job:'Travels and Tourism '},
    {job:'Engineering '},
    {job:'Logistics & Distribution'}
  ];
  quicksearch:any=[{loc:'',type:'',Categories:'',keyword:'',jobRole:'',ads:'',salary:'',minExp:'',minEdu:'',emptype:'',sorting:''}];
  jobListType=[
    {role:'Accountant',place:'Sharjah',country:'UAE' }
  ];
  jobListDetails=[
    {role:'Mechanical Sales Engineer',jobDesc:'Required Mechanical Sales Engineer for Steel fabrication company in Sharjah. Minimum 8 years Sales ...', place:'sharja' ,date:'11 october 2021'},
    {role:'Mechanical Sales Engineer',jobDesc:'Required Mechanical Sales Engineer for Steel fabrication company in Sharjah. Minimum 8 years Sales ...', place:'sharja' ,date:'11 october 2021'},
    {role:'Mechanical Sales Engineer',jobDesc:'Required Mechanical Sales Engineer for Steel fabrication company in Sharjah. Minimum 8 years Sales ...', place:'sharja' ,date:'11 october 2021'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
