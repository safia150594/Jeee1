import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-land-for-sale',
  templateUrl: './sale-land-for-sale.component.html',
  styleUrls: ['./sale-land-for-sale.component.scss']
})
export class SaleLandForSaleComponent implements OnInit {
  cityList:any =['Dubai','Sharjah','Ajman','Ras Al Khaimah','Umm Al Quwain','Abu Dhabi','Al Ain','Fujairah','Al Napoca'];
  saleslandpropertyType:any=['Apartment for Rent',' Villa/House for Rent','Townhouse','Penthouse','Residential Building',' Residential Floor','Villa compound'];
  bedList:any=['1 or more Bathrooms','2 or more Bathrooms','3 or more Bathrooms','4 or more Bathrooms','5 or more Bathrooms','6 or more Bathrooms'];
  salesLandForSales:any=[
    {city:'',Location:'',propertyType:'',residential:'',commersial:'',industrial:'',retail:'',mixeduse:'',keywordsearch:'',agent:'',landlord:'',developer:'',bathrooms:'',minbathrooms:'',maxbathrooms:'',realestateAgent:'',verifiedadsonly:'',adswithvideoonly:'',adswithtouronly:''}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
