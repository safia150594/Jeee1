import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  itemsPerSlide = 6;
  singleSlideOffset = true;
  popularArea:any=[
    {image:'../../../../assets/property/burj2.jpg',heading:'Downtown Dubai',Desc:'Homw To the Worlds tallest tower and biggest mall',Details:'Studio,1 and 2+Bdroom Appartment',detail:'Starting from AED 40,000'}
  ];
  popularAreaList:any=[
    {image:'../../../../assets/property/burj4.jpg',heading:'Downtown Dubai',Desc:'Homw To the Worlds tallest tower and biggest mall',Details:'Studio,1 and 2+Bdroom Appartment',detail:'Starting from AED 40,000',cls:'col-3'},
    {image:'.../../../../assets/property/dubai1.jpg',heading:'Downtown Dubai',Desc:'Homw To the Worlds tallest tower and biggest mall', Details:'Studio,1 and 2+Bdroom Appartment',detail:'Starting from AED 40,000',cls:'col-3'},
    {image:'../../../../assets/property/burjklifa.jpg',heading:'Downtown Dubai',Desc:'Homw To the Worlds tallest tower and biggest mall', Details:'Studio,1 and 2+Bdroom Appartment',detail:'Starting from AED 40,000',cls:'col-3'},
    {image:'../../../../assets/property/burjklifa.jpg',heading:'Downtown Dubai',Desc:'Homw To the Worlds tallest tower and biggest mall', Details:'Studio,1 and 2+Bdroom Appartment',detail:'Starting from AED 40,000',cls:'col-3'},
    {image:'../../../../assets/property/ddd5.jpg',heading:'Downtown Dubai',Desc:'Homw To the Worlds tallest tower and biggest mall', Details:'Studio,1 and 2+Bdroom Appartment',detail:'Starting from AED 40,000',cls:'col-6'},
    {image:'../../../../assets/property/db6.jpg',heading:'Downtown Dubai',Desc:'Homw To the Worlds tallest tower and biggest mall', Details:'Studio,1 and 2+Bdroom Appartment',detail:'Starting from AED 40,000',cls:'col-3'},
    {image:'../../../../assets/property/banner1.jpg',heading:'Downtown Dubai',Desc:'Homw To the Worlds tallest tower and biggest mall', Details:'Studio,1 and 2+Bdroom Appartment',detail:'Starting from AED 40,000',cls:'col-3'}
  ];
  slides = [
    {image: '../../../assets/slider/b1.jpg',text:"Villa"},
    {image: '../../../assets/slider/b2.jpg',text:"Apartment"},
    {image: '../../../assets/slider/b3.jpg',text:"Room For Rent"},
    {image: '../../../assets/slider/b4.jpg',text:"Commercial For Rent"},
    {image: '../../../assets/slider/b5.jpg',text:"Room For Rent"},
    {image: '../../../assets/slider/b6.jpg',text:"Villa for Rent"},
    {image: '../../../assets/slider/b7.jpg',text:"Apartment for Rent"},
    {image: '../../../assets/slider/b5.jpg',text:"Residential Plot"},
    {image: '../../../assets/slider/b3.jpg',text:"Residential Floor"},
    {image: '../../../assets/slider/b4.jpg',text:"Room For Rent"}
  ];
 
    propertyFeature=[
      {image:'../../../assets/slider/b3.jpg', price:'30,000',propDesc:'Spacious 3BR ',bed:'3',bath:'4',sqFt:'33333',place:'Downtown Dubai',time:'6 min'},
      {image:'../../../assets/slider/b3.jpg', price:'30,000',propDesc:'Spacious 3BR ',bed:'3',bath:'4',sqFt:'33333',place:'Downtown Dubai',time:'6 min'},
      {image:'../../../assets/slider/b3.jpg', price:'30,000',propDesc:'Spacious 3BR ',bed:'3',bath:'4',sqFt:'33333',place:'Downtown Dubai',time:'6 min'},
      {image:'../../../assets/slider/b3.jpg', price:'30,000',propDesc:'Spacious 3BR ',bed:'3',bath:'4',sqFt:'33333',place:'Downtown Dubai',time:'6 min'},
      {image:'../../../assets/slider/b3.jpg', price:'30,000',propDesc:'Spacious 3BR ',bed:'3',bath:'4',sqFt:'33333',place:'Downtown Dubai',time:'6 min'}
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
