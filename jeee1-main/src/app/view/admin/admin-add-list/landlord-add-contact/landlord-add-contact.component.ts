import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-landlord-add-contact',
  templateUrl: './landlord-add-contact.component.html',
  styleUrls: ['./landlord-add-contact.component.scss']
})
export class LandlordAddContactComponent implements OnInit {
  Salutation=["Dr","Miss","Mr","Miss","Mrs"];
  constructor(public bsModalRef: BsModalRef) { }
landordContactList:any=[
  {salute:''}
];
  ngOnInit(): void {
  }

}
