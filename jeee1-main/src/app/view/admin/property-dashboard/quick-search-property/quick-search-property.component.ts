import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-search-property',
  templateUrl: './quick-search-property.component.html',
  styleUrls: ['./quick-search-property.component.scss']
})
export class QuickSearchPropertyComponent implements OnInit {
  quickSearch:any=[{catogerySelect:'',searchInput:''}];
  catogery:any=['Promoted Listing','Featured Listing','Villa/House for Rent','Apartment/Flat for Rent','Commercial for Rent','Rooms for Rent(Flatmates)','Short Terms (Monthly)','Short Terms (Daily)'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
