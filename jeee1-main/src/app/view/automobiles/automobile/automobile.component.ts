import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automobile',
  templateUrl: './automobile.component.html',
  styleUrls: ['./automobile.component.scss']
})
export class AutomobileComponent implements OnInit {
   automobileSearch:any=[{search:''}];

  automobileListingDashbooard:any=[
    {UsedCar:'Used Cars For Sale',UsedCarValue:'20311',Motorcycle:'Motorcycle',MotorcycleValue:'20311',AccessoriesPart:'Auto Accessories and Parts',AccessoriesPartValue:'20311',HeaveyVehicles:'Heavey Vehicles',HeaveyVehiclesValue:'2031',Boats:'Boats',BoatsValue:'2013',NumberPlates:'Number Plates',NumberPlatesValue:'1235'}
  ];

  featureListing:any=[
    {img:'../../../../assets/automobile/car5.jpg',price:'30,000',model:'Car Model',year:'2020',km:'60000',time:'Dubai Marina 3 mins ago'},
    {img:'../../../../assets/automobile/car4.jpg',price:'40,000',model:'Car Model',year:'2022',km:'70000',time:'Dubai Marina 3 mins ago'},
    {img:'../../../../assets/automobile/car2.jpg',price:'20,000',model:'Car Model',year:'2320',km:'80060',time:'Dubai Marina 3 mins ago'},
    {img:'../../../../assets/automobile/car3.jpg',price:'50,000',model:'Car Model',year:'2022',km:'86000',time:'Dubai Marina 3 mins ago'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
