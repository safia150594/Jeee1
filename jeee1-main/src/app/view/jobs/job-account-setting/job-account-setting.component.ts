import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-account-setting',
  templateUrl: './job-account-setting.component.html',
  styleUrls: ['./job-account-setting.component.scss']
})
export class JobAccountSettingComponent implements OnInit {
  myValue; 
accSetting:any=[
  {name:'Safia',email:'safia@gmail.com',password:'******',phone:'+975123466',delete:'Delete My Account'}
];
updateAccSetting:any={};
isShowName:Boolean=false;
isShowEmail:Boolean=false;
isShowPhNo:Boolean=false;
isShowPswd:Boolean=false;
toggleName(){
  this.isShowName=!this.isShowName;
}
toggleEmail(){
  this.isShowEmail=!this.isShowEmail;
}
togglePhNo(){
  this.isShowPhNo=!this.isShowPhNo;
}
togglePswd(){
  this.isShowPswd=!this.isShowPswd;
}
editAgencyReg(k){ 
  this.updateAccSetting=this.accSetting[k];
   this.myValue= k;   
  }
  updateName(){
    let k=this.myValue;
    for(let i=0; i<this.accSetting.length;i++){
      if(i==k){
this.accSetting[i]=this.updateAccSetting;
this.updateAccSetting={}; 
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
