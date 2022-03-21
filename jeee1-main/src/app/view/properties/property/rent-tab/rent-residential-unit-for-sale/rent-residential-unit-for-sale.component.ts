import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-residential-unit-for-sale',
  templateUrl: './rent-residential-unit-for-sale.component.html',
  styleUrls: ['./rent-residential-unit-for-sale.component.scss']
})
export class RentResidentialUnitForSaleComponent implements OnInit {
  cityList:any =['Dubai','Sharjah','Ajman','Ras Al Khaimah','Umm Al Quwain','Abu Dhabi','Al Ain','Fujairah','Al Napoca'];
  properyList:any=['Apartment for rent','Villa/House for rent','Townhouse','Penthouse',' Residential Building','Residential Floor','Villa compound','Residential Floor','Residential Plot'];
  bedList:any=['1 or more Bathrooms','2 or more Bathrooms','3 or more Bathrooms','4 or more Bathrooms','5 or more Bathrooms','6 or more Bathrooms'];
  rentResidentialUnit:any=[
    {city:'',Location:'',propertyType:'',minPriceRange:'',maxPriceRange:'',minbed:'',maxbed:'',heating:'',maidsRoom:'',privategarden:'',privategym:'',sharedpool:'',sharedgym:'',conciergeservice:'',coveredparking:'',Walkin:'',viewWater:'',petsallowed:'',study:'',balcony:'',privatepool:'',privatejacuzzi:'',sharedspa:'',security:'',maidservice:'',builtinwardrobes:'',builtkitchenappliances:'',viewoflandmark:'',keywordsearch:'',Agent:'',landlord:'',developer:'',bathroom:'',minbathrooms:'',maxbathrooms:'',realestateAgent:'',verifiedadsonly:'',adswithvideoonly:'',adswithtouronly:''}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
