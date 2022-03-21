import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {
  isFormSubmitted=false;

  countryList:any=['uae','India','Pakistan'];
  stateList:any =['Dubai','Sharjah','Ajman','Ras Al Khaimah','Umm Al Quwain','Abu Dhabi','Al Ain','Fujairah','Al Napoca'];
  companyProfile:any=[
    {cmpnyTitle:'RoyalclassProperty',CompanyTitleInArabic:'',cmpnyEmail:'',logoFile:'',cmpnyDesc:'',cmpnyPhcode:'',cmpnyPhprefix:'',cmpnyPhlast:'ssd',cmpnyPhCodeSecondary:'',faxCode:'',faxPrefix:'',faxlast:'',address:'',country:'',state:'',tradeLicense:'',ORN:''}
  ];
  dummycompanyProfile:any={};
  cmpnyProfile(isValid){
    this.isFormSubmitted=true;
    if(isValid){
      this. companyProfile.push(this.dummycompanyProfile);
      this.dummycompanyProfile ={}; 
      this.isFormSubmitted=false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
