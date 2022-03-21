import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddlistDescPhotoUploadComponent } from './PhotoUpload/addlist-desc-photo-upload/addlist-desc-photo-upload.component';
import {FeaturesComponent} from './features/features.component'
import { ExtraInfoPopComponent } from './extra-info-pop/extra-info-pop.component';
import { PortalsPopComponent } from './portals-pop/portals-pop.component';
import { VideosPopComponent } from './videos-pop/videos-pop.component';
import { FloorPlansPopComponent } from './floor-plans-pop/floor-plans-pop.component';
import { DocumentPopComponent } from './document-pop/document-pop.component';
import { LandlordAddContactComponent } from './landlord-add-contact/landlord-add-contact.component';
import { ChequComponent } from './chequ/chequ.component';
@Component({
  selector: 'app-admin-add-list',
  templateUrl: './admin-add-list.component.html',
  styleUrls: ['./admin-add-list.component.scss']
})
export class AdminAddListComponent implements OnInit {
  isShowRented: Boolean = false;
  isFormSubmitted:any=false;

  refNumIdList=['Dubai,The Lagoons,Dubai Creek Harbour(2781-Ap-S-0003 \
    1-2-207)','Dubai,The Lagoons,Dubai Creek Harbour(2781-Ap-S-0003 \
      1-2-207)','Dubai,The Lagoons,Dubai Creek Harbour(2781-Ap-S-0003 \
        1-2-207)'];
  residentialList:any = ['Villa','Apartment','Residential Floor','Residential Plot','Townhouse','Residential Building','Penthouse','Villa Compound','Hotel Apartment'];
  commercialList:any = ['Office','Shop','Warehouse','Factory','Labour Camp','Commercial Building','Other Commercial','ommercial Floor','Commercial Plot','Bulk Units','Industrial Land','Mixed Use Land','Showroom','Commercial Villa'];
  emiratesList:any =['Dubai','Sharjah','Ajman','Ras Al Khaimah','Umm Al Quwain','Abu Dhabi','Al Ain','Fujairah','Al Napoca'];
  communityList:any =['Dubai','Sharjah','Ajman','Ras Al Khaimah','Umm Al Quwain','Abu Dhabi','Al Ain','Fujairah','Al Napoca'];
  siteViewsList:any =['Pool View','Road View','Park View','Sea View','Marina View','Lake View','Garden View','Community View','Palm Jumeirah View','Burj Khalifa View','Burj Al Arab View','Atlantis View','Skyline View','Golf Course View','Fountain View','Creek View','Canal view','Stable View','Boulevard View','Landscape View','River View','Mountain View'];
  frequencyList:any=['yearly','monthly','weekly','daily'];
  bedlist:any =['Studio','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20+'];
  BathList:any =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20+'];
  ListingType:any=['Zarwah Development','Zarwah Developments','Zaya','zaya hameni','Zenith','Zenith Holding','Zenith Holdings','Zenith Smart Real Estate Development'];
  Cheques:any=['1 cheque (Yearly)','4 cheques (Quarterly)','6 cheques (Bi-Monthly )','12 cheques (Monthly)'];
  sourceList:any=['Not Specified','Bayut.com','Whatsapp','Personal Referral','Bank Referral','Client Referral','Referral within company','Open House','Direct Call','Walk-in','Online Banners','Outdoor Media','Exhibition Stand','Existing Client','Email Campaign','SMS Campaign','Flyers','Roadshow','Radio','Business Card','Word of Mouth','Newspaper advert','Magazine advert','Newsletter','Cold call','Google','Other','Listing Sharing Manager (LSM)','Dubizzle.com','Propertyfinder.ae','JustProperty.com','Other portal','Company website','Zoopla.co.uk','Rightmove.co.uk','Propertywifi.com','Simsari','Facebook','Youtube','whatsapp','Linkedin','Instagram','Twitter','Gulf News','Khaleej Times','IBPC','CFA','Bayut.com (Email Lead)','Property Management Services','Developer'];
  assignList:any=['Royal Class Properties','Yuliya','rabia','person6'];
  statusList:any=['Draft','Live','Archive','Review'];

  propertAddList:any =[
    {type:'',Purpose:'',location:'',emirate:'',unit:'',plot:'',street:'',community:'',view:'',externalRef:'',rentamt:'',Frequency:'',commesionPercent:'',checkNever:'',checkFeatured:'',bed:'',parking:'',year:'',listtype:'',PlotSqft:'',AreaSqft:'',DepositPercent:'',DepositAed:'',noOfCheques:'',Title:'', Description:'',LSM:'',Transaction:'',Permit:'',PermitExpiry:'',Landlord:'',tenancyngTo:'',tenancyngFrom:'',tenant:'',source:'',assign:'',status:''}
  ];
  toggleRented(){
    this.isShowRented=!this.isShowRented;
  }
  
  dummyaddPropertyList:any={};
  addPropertyList(isValid){
    this.isFormSubmitted=true;
    if(isValid){
      this. propertAddList.push(this.dummyaddPropertyList);
      this.dummyaddPropertyList ={}; 
      this.isFormSubmitted=false;
    }
  }

  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openPhotoModalWithComponent() {
   
    this.bsModalRef = this.modalService.show(AddlistDescPhotoUploadComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  openFeatureModalWithComponent() {
   
    this.bsModalRef = this.modalService.show(FeaturesComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  openExtraInfoModalWithComponent() {   
    this.bsModalRef = this.modalService.show(ExtraInfoPopComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  openPortalWithComponent(){
    this.bsModalRef = this.modalService.show(PortalsPopComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  openVideoWithComponent(){
    this.bsModalRef = this.modalService.show(VideosPopComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
   
  openFloorPlansWithComponent(){
    this.bsModalRef = this.modalService.show(FloorPlansPopComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  openDocumentWithComponent(){
    this.bsModalRef = this.modalService.show(DocumentPopComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  openLandlordContactModalWithComponent(){
    this.bsModalRef = this.modalService.show(LandlordAddContactComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  openAddChequModalWithComponent(){
    this.bsModalRef = this.modalService.show(ChequComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit(): void {
  }

}
