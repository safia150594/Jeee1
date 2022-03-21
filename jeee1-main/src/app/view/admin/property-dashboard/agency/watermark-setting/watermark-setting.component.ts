import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watermark-setting',
  templateUrl: './watermark-setting.component.html',
  styleUrls: ['./watermark-setting.component.scss']
})
export class WatermarkSettingComponent implements OnInit {
  isShowAddWaterMark: Boolean = true;
  isFormSubmitted:any=false;
  obj :any={
    watermarkPosition:'',
    opacity:'',
    img:''
  }
  waterMark:any=[
    {waterMarkPosition:'', opacity:'',img:'' ,Update:''}
  ];
 
  dummywaterMarkSetting:any={};
  waterMarkSetting(isValid){
    this.isFormSubmitted=true;
    if(isValid){
      this. waterMark.push(this.dummywaterMarkSetting);
      this.dummywaterMarkSetting ={}; 
      this.isFormSubmitted=false;
    }
  }
  toggleAddWaterMark(){
    this.isShowAddWaterMark=!this.isShowAddWaterMark;   
  }
  reset(){
    this.waterMark={};
    this.isFormSubmitted=false;
    this.dummywaterMarkSetting={};
    this.obj={};
  }
  
  constructor() { }
  public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  ngOnInit(): void {
  }

}
