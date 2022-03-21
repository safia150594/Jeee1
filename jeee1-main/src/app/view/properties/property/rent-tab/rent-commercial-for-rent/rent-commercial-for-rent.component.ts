import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-commercial-for-rent',
  templateUrl: './rent-commercial-for-rent.component.html',
  styleUrls: ['./rent-commercial-for-rent.component.scss']
})
export class RentCommercialForRentComponent implements OnInit {
  cityList:any =['Dubai','Sharjah','Ajman','Ras Al Khaimah','Umm Al Quwain','Abu Dhabi','Al Ain','Fujairah','Al Napoca'];
  propertyTypeCommercial:any=['office for rent','Retail For rent','Industrial for rent','Staff Accomm for rent','Shop','Warehouse','CommercialFloor','commercialBuilding','Commercial Villa','Factory','Showroom','Other'];
  bedList:any=['1 or more Bathrooms','2 or more Bathrooms','3 or more Bathrooms','4 or more Bathrooms','5 or more Bathrooms','6 or more Bathrooms'];
  rentForCommercial:any=[
    {city:'',location:'',propertyType:'',mincommercialprice:'',maxcommercialprice:'',conferenceroom:'',availablefuenished:'',sharedgym:'',dininginbuilding:'',viewofwater:'',coveredparking:'',availablenetworked:'',sharedspa:'',retailinbuilding:'',viewoflandmark:'' ,keywordSearch:'',agent:'',developer:'',bathrooms:'',minbathrooms:'',maxbathrooms:'',RealEstateAgent:'',verifiedadsonly:'',adswithvideoonly:'',adswithtouronly:''},
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
