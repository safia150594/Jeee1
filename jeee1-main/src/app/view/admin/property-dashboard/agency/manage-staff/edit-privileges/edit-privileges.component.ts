import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-privileges',
  templateUrl: './edit-privileges.component.html',
  styleUrls: ['./edit-privileges.component.scss']
})
export class EditPrivilegesComponent implements OnInit {

  privilage:any=[
    { viewAllListing:'',viewTeamListing:'',viewOwnListing:'',viewAllLandlordListing:'',viewOwnLandlordListing:'',canDeletemListing:'',canPublishListing:'',canShareLSM:'',canMarkPortals:'',manageOwnListing:'',manageTeamUsersListing:'',manageAllListing:'',canDeleteDeals:'',manageOwnDeals:'',manageTeamUsersDeals:'',manageAllUsersDeals:'',manageOwnSettings:'',manageAllUserSettings:'',createTeam:'',manageOwnTeam:'',manageAllTeam:'',addNewStaff:'',manageTeamStaff:'',manageAllStaff:'',ManageTeamStaffPrivileges:'',manageAllStaffPrivileges:'',canDeleteNotes:'',manageOwnNotes:'',manageAllNotes:'',manageOwnEmail:'',manageTeamEmail:'',manageAllUserEmail:'',contactManageOwnEmail:'',manageTeamUsersContacts:'',manageAllUsersContacts:'',canViewBayutLeads:'',canViewDubizzleLeads:'',canDeleteLeads:'',manageOwnLeads:'',manageTeamUsersLeads:'',manageAllUsersLeads:'',manageOwnRoles:'',manageCompanyProfile:'',manageOwnProfile:'',manageCRMSettings:'',canDeleteTasks:'',manageOwnTasks:'',manageTeamUsersTasks:'',manageAllUsersTasks:'',canGenerateReports:'',makeAsPublic:''}
  ]; 
  dummyprivilage:any={};
  privilagemanageStaff(x:any){
    console.log(x);
    this. privilage.push(this.dummyprivilage);
      this.dummyprivilage ={}; 
     }
  constructor() { }

  ngOnInit(): void {
  }

}
