import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-inquire',
  templateUrl: './inquire.component.html',
  styleUrls: ['./inquire.component.scss']
})
export class InquireComponent implements OnInit {
  isFormSubmitted:any=false;
inquire:any=[
  {message:'',name:'',email:'',phNo:''}
];
dummyinquire:any={};
sendInquire(isValid){
  this.isFormSubmitted=true;
  if(isValid){
    this. inquire.push(this.dummyinquire);
    this.dummyinquire ={}; 
    this.isFormSubmitted=false;
  }
}
constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
   }

}
