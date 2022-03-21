import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { InquireComponent } from './inquire/inquire.component';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
propertytype:any=[
  {title:'Apartments & flats for rent in UAE'}
];
AvailableCityList:any=[
  {city:'dubai',list:'39,8522'},
  {city:'Sharjah',list:'8522'},
  {city:'Ras Al Khaimah ',list:'3922'},
  {city:'Fujeirah',list:'3982'},
  {city:'Ajman',list:'92'},
  {city:'Umm Al Qawain',list:'2'},
  {city:'Abu Dhabi',list:'322'},
  {city:'Al Ain',list:'392'},
];
propertyListSlide:any=[
  {slideImg:'../../../../assets/slider/b1.jpg'},
  {slideImg:'../../../../assets/slider/b2.jpg'},
  {slideImg:'../../../../assets/slider/b3.jpg'}
];
  propertyList:any=[
    {propDesc:'Bright Spacious 3 BR With Balcony | Near Metro',Feature:'Feature',amount:'75,000',time:'3 min',bed:'3',bath:'3',sqFt:'1235',Place:'Deira',logo:'../../../../assets/logo/j2.jpg',company:'Azco Real Estate (LLC) JVC Rentals Agent',remainder:"Don't forget to mention the property reference ",own:'xxx:JVC-ABD-DMS-STD when calling' ,phno:'+971 130513055'}
  ];
  

  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openMailModalWithComponent() {
   
    this.bsModalRef = this.modalService.show(InquireComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  ngOnInit(): void {
  }

}
