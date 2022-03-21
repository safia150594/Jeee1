import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-commercial-for-sale',
  templateUrl: './sale-commercial-for-sale.component.html',
  styleUrls: ['./sale-commercial-for-sale.component.scss']
})
export class SaleCommercialForSaleComponent implements OnInit {
  cityList:any =['Dubai','Sharjah','Ajman','Ras Al Khaimah','Umm Al Quwain','Abu Dhabi','Al Ain','Fujairah','Al Napoca'];
  saleComersialList:any=['office for sale','Retail For Sale','IndustrialforSale','taffAccommforSale','Shop','Warehouse','CommercialFloor','commercialBuilding','commercialVilla','Factory','Other','Showroom'];
  bedList:any=['1 or more Bathrooms','2 or more Bathrooms','3 or more Bathrooms','4 or more Bathrooms','5 or more Bathrooms','6 or more Bathrooms'];
  
  propertyCommercial:any=[
    {city:'',location:'',propertyType:'',mincommercialprice:'',maxcommercialprice:'',conferenceroom:'',availablefuenished:'',sharedgym:'',dininginbuilding:'',viewofwater:'',coveredparking:'',availablenetworked:'',sharedspa:'',retailinbuilding:'',viewoflandmark:'' ,keywordSearch:'',agent:'',developer:'',bathrooms:'',minbathrooms:'',maxbathrooms:'',RealEstateAgent:'',verifiedadsonly:'',adswithvideoonly:'',adswithtouronly:''},
    ];
  constructor() { }
  
  ngOnInit(): void {
  }

}
