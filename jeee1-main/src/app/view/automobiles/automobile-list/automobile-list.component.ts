import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automobile-list',
  templateUrl: './automobile-list.component.html',
  styleUrls: ['./automobile-list.component.scss']
})
export class AutomobileListComponent implements OnInit {
  LocationList:any =['Dubai','Sharjah','Ajman','Ras Al Khaimah','Umm Al Quwain','Abu Dhabi','Al Ain','Fujairah','Al Napoca'];
  typeList:any=['Job for Apply','Property for Sale','Property for Rent','Automobile for Sale','Automobile for Rent'];
  CategoriesList:any=['One','Two','Three'];
  sortLists:any=['Newest to Oldest','Oldest to Newest','Price Highest to Lowest','Price Lowest to Highest'];
  quicksearch:any=[{loc:'',type:'',Categories:'',keyword:''}];
  browserResult:any=[
    {car:"Audi",totalCar:'123'},
    {car:"BMW",totalCar:'123'},
    {car:"Chevrolet",totalCar:'123'},
    {car:"Ford",totalCar:'123'},
    {car:"Hyundai",totalCar:'123'},
    {car:"Land Rover",totalCar:'123'},
    {car:"Mercedes-Benz",totalCar:'123'},
    {car:"Mitsubishi",totalCar:'123'},
    {car:"Nissan",totalCar:'123'},
    {car:"Porsche",totalCar:'123'},
    {car:"Toyota",totalCar:'123'},
    {car:"Volkswagen",totalCar:'123'},
  ];
  automobilelisting:any=[
    {advType:'promoted',img:'../../../../../assets/automobile/car4.jpg',heading:'Mini Cooper Model',carType:'Selling price',aed:'30,000',year:'2019',km:'20,360',logo:'../../../../../assets/logo/jeee1.png'},
    {advType:'promoted',img:'../../../../../assets/automobile/car4.jpg',heading:'Mini Cooper Model',carType:'Selling price',aed:'30,000',year:'2019',km:'20,360',logo:'../../../../../assets/logo/jeee1.png'},
    {advType:'promoted',img:'../../../../../assets/automobile/car4.jpg',heading:'Mini Cooper Model',carType:'Selling price',aed:'30,000',year:'2019',km:'20,360',logo:'../../../../../assets/logo/jeee1.png'}
  ];
  automobilelist:any=[
    {advType:'Premium',history:'History Check',heading:'ROLLS ROYCE GHOST 2021 BRAND NEW FULL',price:'58,000',img:'../../../../../assets/automobile/car5.jpg',carDetails:'Used Cars for Sale > Rolls Royce > Rolls Royce Ghost',carBuyed:'10 October 2021',aed:'1,740,000',year:'2021',door:'4',km:'1352',color:'red',imgOne:'../../../../../assets/logo/logor4.png',locDetails:" UAE > Dubai > Al Quoz > Al Quoz Industrial Area > Al Quoz Industrial Area 3"},
    {advType:'Premium',history:'History Check',heading:'2021 | BRAND NEW | MERCEDES MAYBACH GLS 600 | WHITE EXTERIOR WITH BROWN INTERIOR',price:'58,000',img:'../../../../../assets/automobile/car5.jpg',carDetails:'Used Cars for Sale > Rolls Royce > Rolls Royce Ghost',carBuyed:'10 October 2021',aed:'1,740,000',year:'2021',door:'4',km:'1352',color:'red',imgOne:'../../../../../assets/logo/j2.jpg',locDetails:" UAE > Dubai > Al Quoz > Al Quoz Industrial Area > Al Quoz Industrial Area 3"}
  ];
  automobile:any=[
    {heading:'cars online in Dubai, UAE',desc:'Brand new & used cars for sale in Dubai - Sell your 2nd hand car on dubizzle & reach 1.6 million buyers today.',sorting:''}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
