import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-list-auto-mob',
  templateUrl: './add-list-auto-mob.component.html',
  styleUrls: ['./add-list-auto-mob.component.scss']
})
export class AddListAutoMobComponent implements OnInit {
  isFormSubmitted:any=false;
  categoryList=['new','old'];
  addList:any = [
    { type: 'rent', carAge: 'new', kilometers: '1000', warranty: 'yes', title: 'car rent', shortDesc: 'xyz', longDesc: 'sssss', color: 'red',
   totalprice: '1000', steeringSide: 'left', door: '4', bodycond: 'good', machanicalCond: 'not bad',sellerType:'llc',bodyType:'ovel',cylinder:'no cylinder',
  transmissionType:'control',regionSpecs:'space',horsepower:'horsepower',fuelType:'20',extras:'extra',techFeature:'teckfeture',year:'2021',phone:'123456798',mobile:'01478520963',country:'india',city:'ccb',location:'cbe' }
  ];
  dummyAddList:any={};
  addAutoMobList(isValid){
    this.isFormSubmitted=true;
    if(isValid){
      this.addList.push(this.dummyAddList);
      this.dummyAddList ={}; 
      this.isFormSubmitted=false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
