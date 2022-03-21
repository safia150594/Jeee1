import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  isFormSubmitted:any=false;
  signUp:any=[
    {regName:'',regEmail:'',regPassword:'',confirmPSwd:''}
  ];
  dummysignUp:any={};
  signUpUser(isValid){
    this.isFormSubmitted=true;
    if(isValid){
      this. signUp.push(this.dummysignUp);
      this.dummysignUp ={}; 
      this.isFormSubmitted=false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
