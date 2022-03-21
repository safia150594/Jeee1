
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agency-registration',
  templateUrl: './agency-registration.component.html',
  styleUrls: ['./agency-registration.component.scss']
})
export class AgencyRegistrationComponent implements OnInit {
  constructor() { } 
  isFormSubmitted=false;
  myValue; 
  url="../../../assets/slider/b3.jpg";
  agencyRegristration:any=[
    {agencyName:"safia", agencyEmail: "safia@gmail.com", phoneNumber:"123123123",landline:"0444444444", description:"I need this ecommerse servise",uploadLogo:"../../../assets/slider/b3.jpg",address:"10kutralam",city:"cbe",state:"kovai",zipcode:"640641"}, 
    {agencyName:"safia", agencyEmail: "safia@gmail.com", phoneNumber:"123123123",landline:"0444444444", description:"I need this ecommerse servise",uploadLogo:"../../../assets/slider/b3.jpg",address:"10kutralam",city:"cbe",state:"kovai",zipcode:"640641"}
  ];
  companyReg:any={};
companyUpdateReg:any={};
selectFile(event){
  if(event.target.files){
    var reader= new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event:any)=> {
      this.url =event.target.result;
    }
  }
}
  addAgencyReg(isValid){ 
    this.isFormSubmitted=true;
    console.log(isValid);
    if(isValid){
      this.isFormSubmitted=false;
      this.companyReg.url = this.url;
      this.agencyRegristration.push(this.companyReg);
      this.companyReg ={};   
     }
  }
  deleteAgencyReg(i){    
console.log(i);
this.agencyRegristration.splice(i,1);
  }
  editAgencyReg(k){ 
  this.companyUpdateReg=this.agencyRegristration[k];
   this.myValue= k;   
  }
  updateAgencyReg(){
    let k=this.myValue;
    for(let i=0; i<this.agencyRegristration.length;i++){
      if(i==k){
this.agencyRegristration[i]=this.companyUpdateReg;
this.companyUpdateReg={}; 
      }
    }
  }
  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

  ngOnInit(): void {
  }


}
