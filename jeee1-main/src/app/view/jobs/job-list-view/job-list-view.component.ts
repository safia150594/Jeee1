import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list-view',
  templateUrl: './job-list-view.component.html',
  styleUrls: ['./job-list-view.component.scss']
})
export class JobListViewComponent implements OnInit {
  LocationList: any = ['Dubai', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Umm Al Quwain', 'Abu Dhabi', 'Al Ain', 'Fujairah', 'Al Napoca'];
  typeList: any = ['Job for Apply', 'Property for Sale', 'Property for Rent', 'Automobile for Sale', 'Automobile for Rent'];
  CategoriesList: any = ['Account Executive', 'Fashion', 'Media', 'Architecture and Interior Design', 'graphic-design', 'sales', ' Information Technology'];
  JobRoleList:any=['Account Executive','Fashion','Media','Architecture and Interior Design','graphic-design','sales',' Information Technology'];
  adsPost:any=['Today Executive','Within 3 Days','Media','Within 7 Days','Within 14 Days','Within 30 Days'];
  salayList:any=['0-1999','2000-3999','3000-4000','4000-5000','5000-6000','6000-7000','8000-9000','10000-12000','12000-15000','+50000'];
  minExpList:any=['1-2 years','2-5 years','5-10 years','10-15 years','15+ years'];
  minEduList:any=['High School','Secondary','Batchlor Degree','Master Degree','PhD'];
  empTypeList:any=['Full Time','Part Time','Contract','Temporary','Other'];
  quicksearch: any = [{ loc: '', type: '', Categories: '', keyword: '',showEnglishOnly:'',jobRole:'',ads:'',salary:'',minExp:'',minEdu:'',emptype:''}];

  jobListViewTitle = [
    { title: 'URGENT!!! Senior Male Accountant Required' }
  ];
  jobListView = [
    { location: 'Dubai', title: 'Job', role: 'Accounts' }
  ];
  jobListViewDetails = [
    { details: '9th oct 2021', empType: 'Full Time', monthlySalary: '4,000-5,000 AED', jobRole: 'Accountant', benefits: 'As Per UAE Law', minWorkExp: '1-2 Years', minEduLevel: 'Bachelors Degree', lisyBy: 'Employer', companySize: '51-200 Employees', careerLevel: 'Junior', expiresOn: '13 oct 2021', cmpName: 'Rcg', jobDesc: 'Finance & Account Manager with VAT experience and understanding of UAE VAT ,Law Responsible for bookkeeping, maintaining accounts, general ledgers for multiple companies,Reconcile bank statement and review payroll records' ,shortLink:'https://asd//asd/sa'}
  ];
  jobListViewLocation = [
    { jobarea: 'Dubai Marina', jobcity: 'Dubai' ,url:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28908.383593517894!2d55.122060489818345!3d25.083306391276366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5402c126e3%3A0xb9511e6655c46d7c!2sDubai%20Marina%20-%20Dubai!5e0!3m2!1sen!2sae!4v1634120458918!5m2!1sen!2sae' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
