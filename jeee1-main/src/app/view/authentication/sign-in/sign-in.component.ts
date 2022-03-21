import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isFormSubmitted:any=false;
  signIn:any=[
    {userEmail:'',userPassword:''}
  ];
  dummysignIn:any={};
  signinUser(isValid){
    this.isFormSubmitted=true;
    if(isValid){
      this. signIn.push(this.dummysignIn);
      this.dummysignIn ={}; 
      this.isFormSubmitted=false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
