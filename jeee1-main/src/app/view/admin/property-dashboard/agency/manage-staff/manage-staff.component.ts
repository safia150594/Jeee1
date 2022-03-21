import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.scss']
})
export class ManageStaffComponent implements OnInit {
  isShowAddListManageStaff: Boolean = false;
  isShowMQuickSearch: Boolean = true;
  isShowEdit: Boolean =false;
  isFormSubmitted:any=false;  
NationalityList:any=['United Arab Emirates','United Kingdom','United States of America','Australia'];
phoneCodeList:any=['+971','+91','+81'];
teamList:any=['yuliya','rabia'];
  quickSearch:any=[
    {name:'',staffEmail:'',primaryPhoneCode:'',primaryPhonePrefix:'',primaryPhoneLast:''}
  ];
  addManageStaff:any=[
    {name:'Royal Class Properties',nameInArabic:'',staffEmail:'royalclassdubai@gmail.com',BNR:'',password:'',ConfirmPassword:'',team:'yuliya',addImg:'',aboutYou:'',primaryPhoneCode:'+971',primaryPhonePrefix:'553166155',secondaryPhoneCode:'+91',secondaryPhonePrefix:'123456789',fax:'',faxPrefix:'',faxLast:'',faxSecondary:'',address:'',zip:'',nationality:'',isActive:'',skype:'',whatsApp:'',passportNo:'',ListingR:'0',ListingS:'0'}
  ];
  reset(){
   this.quickSearch={};
  }
  toggleEdit(){
this.isShowEdit=!this. isShowEdit;
  }
  
  toggleAddListManageStaff(){
    this.isShowAddListManageStaff=!this.isShowAddListManageStaff;   
  }
  toggleQuickSearch(){
    this.isShowMQuickSearch=!this.isShowMQuickSearch;   
  }
  constructor() { }

  ngOnInit(): void {
  }

}
