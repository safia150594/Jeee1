import { Component, OnInit } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';
@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {
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
// exportcsv
fileDownload() {
  var options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Report data',
    useBom: true,
    noDownload: false,
    headers: ["img", "refID", "idREF", "condition", "price", "size", "price", "time", "bed", "Expires"]
  };
  new ngxCsv(this.ListingTable, "Report", options);
}

  constructor() { }

  ngOnInit(): void {
  }

}
