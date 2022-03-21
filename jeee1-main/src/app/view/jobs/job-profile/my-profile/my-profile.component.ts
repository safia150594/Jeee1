import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  isFormSubmitted:any=false;
  url="../../../assets/slider/b3.jpg";
  genderLists = ['male', 'female'];
  careerLevelLists =['Student/Intern','Junior','Mid-Level','Senior','Manager','Executive/Director'];
  CareerLocationLists=['Afghanistan','Albania','Algeria'];
  currentPositionLists=['Currently Unemployed','.NET Architect','.NET Developer','.NET Engineer','.NET Web Develope','ABAP Developer','Academic Advisor','Academic Counselor'];
  salaryExpectationsLists=['Unspecified','0 -1,999','2,000-3,000','3,000 - 4,000','5,000 -6,000','+10,000'];
  commitmentLists=['Full Time','Part Time','Contract','Temporary','other'];
  noticePeriodLists=['None','1 Week','3 Week','3 Week','1 Month','2 Month','More then 2 Month'];
  visaStatusLists=['Not Applicable','Business','Employment','Residence','Spouse','Student','Visit'];
  highestEducationLists=['Not Applicable','High School/Secondary','Bachelors Degree','Maseter Degree','PhD'];
  experienceLists=['0-1 Years','1-2 Years','2-5 Years','5-10 Years','10-15 Years','15+ Years'];
  experienceFieldLists=['Accounting','Architecture & Interior Design','Automotive','Beauty','Business & Development','Construction','Customer Service','Education','Engineering','Fashion','Food & Beverages','Graphic & Design','Hospitality & Restaurants','HR Recruitment','Industrial & Manufacturing','Information Technology','Internet','Legal Services','Logistics & Distribution','Marketing & Advertising','Media','Medical & Healthcare','Online Media','Real Estate','Retail & Consumer Goods','Safety & Security','Sales','Secretarial','Sports & Fitness','Transportation','Travel & Tourism'];


  profile:any = [
    { name: "safia", gender: "female", dob: "150534", careerLevel: "good", careerLocation: "India", currentPosition: "UI", currentCompany: "RC", salaryExpectations: "10", commitment: "gg", noticePeriod: "null", visaStatus: "vs", highestEducation: "phd", cv: "file", summary:"d", experience:"2",experienceField:"ui",expTwo:"2",expFieldTwo:"angular",expThree:"3",expFieldThree:"front end",subscribe:"wk",subscribeone:"wk"}
  ];

  jobProfileList:any={};
jodDashboard:any=[
  {ads:'0',time:'0',search:'0',fav:'0'}
];
  selectFile(event){
    if(event.target.files){
      var reader= new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=> {
        this.url =event.target.result;
      }
    }
  }


  AddProfile(isValid){
    this.isFormSubmitted=true;
    if(isValid)
    {
      this.profile.push(this.jobProfileList);
      this.jobProfileList ={}; 
    }    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
