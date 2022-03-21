import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-automobile-list-view',
  templateUrl: './automobile-list-view.component.html',
  styleUrls: ['./automobile-list-view.component.scss']
})
export class AutomobileListViewComponent implements OnInit {
  constructor() { }
  automobileListViewSlide:any=[
    {img:'../../../../../assets/automobile/car4.jpg'},
    {img:'../../../../../assets/automobile/car5.jpg'},
    {img:'./../../../../assets/automobile/car6.jpg'}
  ];
  automobileListView:any=[
    {title:"HONDA CR-V 2007",time:'10 hours',AED:'12,345',place:'Al Barsha, Dubai, UAE'}
  ];
  itemView:any=[
    {title:'HISTORY CHECK',cls:'fas fa-car',checks:'Available'},
    {title:'TRIM',cls:'far fa-star',checks:'EX'},
    {title:'KILOMETERS',cls:'fas fa-tachometer-alt',checks:'100'},
    {title:'WARRANTY',cls:'fas fa-award',checks:'Does not apply'},
    {title:'COLOR',cls:'fas fa-tint',checks:'Silver'},
    {title:'YEAR',cls:'far fa-calendar-alt',checks:'2007'}
  ];
  topic:any=[
    {heading:'Doors',Details:'5+door'},
    {heading:'Body condition',Details:'Perfect inside and out'},
    {heading:'Mechanical condition',Details:'Perfect inside and out'},
    {heading:'Seller type',Details:'Owner'},
    {heading:'Body Type',Details:'Crossover'},
    {heading:'No. of Cylinders',Details:'4'},
    {heading:'Transmission Type',Details:'Automatic Transmission'},
    {heading:'Regional Specs',Details:'GCC Specs'},
    {heading:'Horsepower',Details:'200 - 300 HP'},
    {heading:'Fuel Type',Details:'Gasoline'},
    {heading:'Extras',Details:'Climate Control, Leather Seats, Navigation System, Parking Sensors, Power Locks, Power Mirrors, Power Seats, Power Sunroof, Power Windows, Premium Lights, Premium Sound System, Rear View Camera'},
    {heading:'Technical Features',Details:'Cruise Control, Power Steering'},
    {heading:'Steering Side',Details:'Left Hand Side'}
  ];
  moreDetail:any=[
    {desc:'HONDA CR-V 2007 Registered in 2008, Excellent condition with Android Screen and Navigation system,2nd owner',place:'Al Barsha, Dubai, UAE'}
  ];
  companyUser:any=[
    {companyUser:'Union Used Car Exhb.',img:'../../../../../assets/logo/logor4.png' ,phno:'+97156321123'},
  ];
  isShowPhNumber = false;
  isShowMap = false;
  isShowTogglt = true;
  automobileScrollNav: boolean =false;

  @HostListener('window:scroll',['$event'])  onScrollAutomobile(): void{
    if(window.scrollY > 1000){
      this.automobileScrollNav=true;
    }
    else{
      this.automobileScrollNav=false;
    }
  }
  togglePhNumber(){
    this.isShowPhNumber=!this.isShowPhNumber;
    // if(this.isShowPhNumber==true){
    //   this.isShowPhNumber=false;
    // }else{
    //   this.isShowPhNumber=true;
    // }
    
  }
  toggltShowMap(){
    this.isShowMap=true;
    this.isShowTogglt=false;
  }
  ngOnInit(): void {
  }

}
