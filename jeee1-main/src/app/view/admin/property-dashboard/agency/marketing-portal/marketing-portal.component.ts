import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing-portal',
  templateUrl: './marketing-portal.component.html',
  styleUrls: ['./marketing-portal.component.scss']
})
export class MarketingPortalComponent implements OnInit {
  isShowAddListMarketingPortal: Boolean = true;


  portalsList:any=['Bayut','Dubizzle'];
  TemplateList:any=['Trovit','Mitula','Dubizzle','Bayut','Justproperty','Rightmove','Getthat','MK_LS','Jrd2','Simsari','Propsearch','commercial_residentialpeople'];
  marketingPortal:any=[
    {Portals:'',status:'',Template:''}
  ];
  listingBrokedownPortalWise:any=[
    { portal:'Bayut',	listingRent:'3',listingSale:'3',lastXMLFeed:'03/11/21 10:17:03' },
    { portal:'Dubizzle',	listingRent:'13',listingSale:'23',lastXMLFeed:'03/11/21 10:17:03' }
  ];
 

  toggleAddListMarketingPortal(){
    this.isShowAddListMarketingPortal=!this.isShowAddListMarketingPortal;   
  }
  reset(){
    this.marketingPortal={};
  }
  constructor() { }

  ngOnInit(): void {
  }

}
