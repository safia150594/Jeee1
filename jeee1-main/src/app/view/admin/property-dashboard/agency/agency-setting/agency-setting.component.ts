import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-setting',
  templateUrl: './agency-setting.component.html',
  styleUrls: ['./agency-setting.component.scss']
})
export class AgencySettingComponent implements OnInit {
  pagesLists:any=['20','50','100']
  contactLists:any=['20','50','100']
  listingShareManager:any=['Active LSM','Deactive LSM'];
  listingShareManagerOne:any=['Keep As Private','Share With Others'];
  agencySetting:any=[
    {noOfBedrooms:'',noOfParkings:'',noOfPhotos:'',noOfVideos:'',landlordMandatory:'',sourceMandatory:'',referenceMandatory:'',buildingMandatory:'',assignMultiple:'',srcmandatory:'',contactsmandatory:'',Areamandatory:'',Budgetmandatory:'',contacts:'',Primarymandatory:'',activeOrDeactive:'',listPerPage:'',pagesList:''}
  ];
  accountSettings(accountSetting:any){
    console.log(this.agencySetting);
    this.agencySetting.push(this.agencySetting);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
