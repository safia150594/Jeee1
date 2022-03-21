import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-staff-add-list',
  templateUrl: './manage-staff-add-list.component.html',
  styleUrls: ['./manage-staff-add-list.component.scss']
})
export class ManageStaffAddListComponent implements OnInit {
  isFormSubmitted:any=false;

teamList:any=['yuliya','rabia'];
NationalityList:any=['United Arab Emirates','United Kingdom','United States of America','Australia'];
phoneCodeList:any=['+971','+91','+81']
addManageStaff:any=[
  {name:'',nameInArabic:'',staffEmail:'',BNR:'',password:'',ConfirmPassword:'',team:'',addImg:'',aboutYou:'',primaryPhoneCode:'',primaryPhonePrefix:'',secondaryPhoneCode:'',secondaryPhonePrefix:'',fax:'',faxPrefix:'',faxLast:'',faxSecondary:'',address:'',zip:'',nationality:'',isActive:'',skype:'',whatsApp:'',passportNo:''}
];
dummyaddManageStaff:any={};
manageStaff(isValid){
    this.isFormSubmitted=true;
    if(isValid){
      this.addManageStaff.push(this.dummyaddManageStaff);
      this.dummyaddManageStaff ={}; 
      this.isFormSubmitted=false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
