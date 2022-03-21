import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-residential-for-sale',
  templateUrl: './sale-residential-for-sale.component.html',
  styleUrls: ['./sale-residential-for-sale.component.scss']
})
export class SaleResidentialForSaleComponent implements OnInit {
  cityList:any =['Dubai','Sharjah','Ajman','Ras Al Khaimah','Umm Al Quwain','Abu Dhabi','Al Ain','Fujairah','Al Napoca'];
  properyList:any=['Apartment for sale','Villa/House for sale','Townhouse','Penthouse',' Residential Building','Residential Floor','Villa compound',];
  bedList:any=['1 or more Bathrooms','2 or more Bathrooms','3 or more Bathrooms','4 or more Bathrooms','5 or more Bathrooms','6 or more Bathrooms'];
  property:any=[
    {city:'',Location:'',propertyType:'',minPriceRange:'',maxPriceRange:'',minbed:'',maxbed:'',heating:'',maidsRoom:'',privategarden:'',privategym:'',sharedpool:'',sharedgym:'',conciergeservice:'',coveredparking:'',Walkin:'',viewWater:'',petsallowed:'',study:'',balcony:'',privatepool:'',privatejacuzzi:'',sharedspa:'',security:'',maidservice:'',builtinwardrobes:'',builtkitchenappliances:'',viewoflandmark:'',keywordsearch:'',Agent:'',landlord:'',developer:'',bathroom:'',minbathrooms:'',maxbathrooms:'',realestateAgent:'',verifiedadsonly:'',adswithvideoonly:'',adswithtouronly:''}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
