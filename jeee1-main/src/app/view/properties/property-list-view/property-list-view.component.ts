import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-property-list-view',
  templateUrl: './property-list-view.component.html',
  styleUrls: ['./property-list-view.component.scss']  
})
export class PropertyListViewComponent implements OnInit {


  isShowDesc: Boolean = false;
  isShowPhoneNumber: Boolean = false;
  propertyScrollNav: boolean =false;
  isFormSubmitted=false;
  propertyListViewSlide:any=[
    {img:'../../../assets/img/banner4.jpg'},
    {img:'./../../assets/img/banner5.jpg'},
    {img:'../../../assets/img/banner2.jpg'}
  ];
  aminity:any=[
    {x:'Central A/C & Heating'},
    {x:'Balcony'},
    {x:'Covered Parking'},
    {x:'Built in Wardrobes'},
    {x:'View of Landmark'},
    {x:'Covered Parking'}
  ];
  propertyInfoFurnitue:any=[
    {cls:'fas fa-check',detail:'Furniture'},
    {cls:'fas fa-check',detail:'Furniture'},
    {cls:'fas fa-check',detail:'Furniture'},
    {cls:'fas fa-check',detail:'Furniture'}
  ];
  propertyInfo:any=[
    {cls:'fas fa-couch',item:'Furniture',Detail:'No'},
    {cls:'fas fa-home',item:'Villa For',Detail:'Sale'},
    {cls:'fas fa-user',item:'Listed By',Detail:'Agent'},
    {cls:'fas fa-calendar',item:'Posted On',Detail:'December 6th, 2021'},
    {cls:'fas fa-edit',item:'Property Reference',Detail:'DP-S-38464'},
    {cls:'fas fa-clock',item:'Updated',Detail:'13 minutes'},
  ];
  
propertyListView:any=[
  {aed:'50,000 yearly',Stdio:'1',Bath:'1',SqFt:'1',area:'Dubai Silicon Oasis',city:'Dubai',shotDesc:' PAY 4CHQS | BEST DEAL | MASSIVE STUDIO | WITH BALCONY @28K',Desc:'Peace Homes Real Estate is delighted to offer you this astonishing  and elegantly designed apartment in DUNES RESIDENCY, Jumeirah  Village Circle.',LongDesc:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima  quo quasi mollitia laboriosam a. Quo laborum adipisci obcaecati  velit corrupti dolorum voluptatem ex tenetur labore ad? Possimus numquam voluptatem ipsam!',phNo:'050505050505',ref:'Reference ID: DP-R-4203',logo:'../../../../assets/logo/logog1.png ',profession:'Agent',LLC:'Driven Property LLC',regNo:'11917',dedNO:'11917',country:'UAE'
  }
];
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
  @HostListener('window:scroll',['$event'])  onScrollProperty(): void{
    if(window.scrollY > 1000){
      this.propertyScrollNav=true;
    }
    else{
      this.propertyScrollNav=false;
    }
  }
  toggleDesc(){
    this.isShowDesc=!this.isShowDesc;   
  }
  togglePhNo(){
    if(this.isShowPhoneNumber==false){
        this.isShowPhoneNumber=true;
      }
  }

  constructor() { }
  ngOnInit(): void {
  }

}
