import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-short-term-daily',
  templateUrl: './rent-short-term-daily.component.html',
  styleUrls: ['./rent-short-term-daily.component.scss']
})
export class RentShortTermDailyComponent implements OnInit {
  cityList:any =['Dubai','Sharjah','Ajman','Ras Al Khaimah','Umm Al Quwain','Abu Dhabi','Al Ain','Fujairah','Al Napoca'];
  FurnishingList:any=['Furnishing','unFurnishing'];
  properyList:any=['Apartment Flat for Rent','Villa/House for sale'];
  bedList:any=['1 or more Bathrooms','2 or more Bathrooms','3 or more Bathrooms','4 or more Bathrooms','5 or more Bathrooms','6 or more Bathrooms'];
  property:any=[
    {city:'',Location:'',propertyType:'',minPriceRange:'',maxPriceRange:'',minbed:'',maxbed:'',Furnishing:'',heating:'',maidsRoom:'',privategarden:'',privategym:'',sharedpool:'',sharedgym:'',conciergeservice:'',coveredparking:'',Walkin:'',viewWater:'',petsallowed:'',study:'',balcony:'',privatepool:'',privatejacuzzi:'',sharedspa:'',security:'',maidservice:'',builtinwardrobes:'',builtkitchenappliances:'',viewoflandmark:'',keywordsearch:'',Agent:'',landlord:'',developer:'',bathroom:'',minbathrooms:'',maxbathrooms:'',realestateAgent:'',verifiedadsonly:'',adswithvideoonly:'',adswithtouronly:''}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
