import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-rooms-for-rent',
  templateUrl: './rent-rooms-for-rent.component.html',
  styleUrls: ['./rent-rooms-for-rent.component.scss']
})
export class RentRoomsForRentComponent implements OnInit {
  cityList:any =['Dubai','Sharjah','Ajman','Ras Al Khaimah','Umm Al Quwain','Abu Dhabi','Al Ain','Fujairah','Al Napoca'];
  rentRoomList:any=['Appartment/Flat rent','Villa for Rent'];
  bedList:any=['1 or more Bathrooms','2 or more Bathrooms','3 or more Bathrooms','4 or more Bathrooms','5 or more Bathrooms','6 or more Bathrooms'];
  rentRoomsForRent:any=[
    {city:'',location:'',propertyType:'',Washer:'',CableTV:'',gym:'',sauna:'',freeParking:'',CleaningIncluded:'',nearMetro:'',WirelessInternet:'',Jacuzzi:'',SwimmingPool:'',RecreationCenter:'',keywordSearch:'',PrivateRoom:'',RoomWithPartition:'',BedSpace:'',AttachedBathroom:'',Balcony:'',adswithtouronly:'',Dontmind:'',Females:'',Males:'',Family:'',Couples:'',verifiedadsonly:'',adswithvideoonly:''}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
