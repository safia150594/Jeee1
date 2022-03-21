import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  isShowList: Boolean = false;

  catogery:any=['Promoted Listing','Featured Listing','Villa/House for Rent','Apartment/Flat for Rent','Commercial for Rent','Rooms for Rent(Flatmates)','Short Terms (Monthly)','Short Terms (Daily)'];
  
  quickSearch:any=[{catogerySelect:'',searchInput:''}];

  ListingTable:any=[
    { img:'../../../../assets/property/burj3.jpg',refID:'583095830945',condition:'Fully furnished',price:'15000',size:'200',time:'7 hours',bed:'2',Expires:'30 days'}
  ];

  toggleAddList(){
    this.isShowList=!this.isShowList;
    // if(this.isShowDesc==true){
    //   this.isShowDesc=false;
    // }else{
    //   this.isShowDesc=true;
    // }
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
