import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-teams',
  templateUrl: './manage-teams.component.html',
  styleUrls: ['./manage-teams.component.scss']
})
export class ManageTeamsComponent implements OnInit {
  isShowAddListManageTeam: Boolean = false;
  isFormSubmitted:any=false;
  teamList:any=[
    {team:'Royal Class',createdOn:'12-02-2021',teamMembers:'xxx,yyy,zzz,',teamManagement:'Team Leader'}
  ];
  addTeam:any=[
    {teamName:''}
  ];
dummyAddTeam={};
  manageTeam(isValid){
    this.isFormSubmitted=true;
    if(isValid){
      this.addTeam.push(this.dummyAddTeam);
      this.dummyAddTeam={};
      this.isFormSubmitted=false;
    }
  }
  toggleAddListManageTeam(){
    this.isShowAddListManageTeam=!this.isShowAddListManageTeam;   
  }
  constructor() { }

  ngOnInit(): void {
  }

}
