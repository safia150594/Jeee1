import { Component, OnInit } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';
@Component({
  selector: 'app-profolio-listing-table',
  templateUrl: './profolio-listing-table.component.html',
  styleUrls: ['./profolio-listing-table.component.scss']
})
export class ProfolioListingTableComponent implements OnInit {
  isShowMoreFilter: Boolean = true;

  currentsortCount: string;
  sortDirCount: number;
  currentColName: any;
  reportsList: any;

  toggleMoreFilter() {
    this.isShowMoreFilter = !this.isShowMoreFilter;
  }

  propertyLocationList: any = ['Dammac', 'umma', 'jumaira'];
  purposeList: any = ['Sale', 'Rent'];
  categoryList: any = ['Residential', 'Commercial', 'Vila', 'Appartment', 'Office', 'Shop', 'Warehouse', 'Factory', 'Labour Camp', 'Commercial Building', 'Other Commercial', 'Residential Floor', 'Commercial Floor', 'Residential Plot', 'Commercial Plot', 'Town House', 'Residential Building', 'Penthouse', 'Villa Compound', 'Bulk Units', 'Hotel Appartment', 'Industrial Land', 'Mixed Use Land', 'Showroom', 'Commercial Villa'];
  brdsList: any = ['Studio', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  pricingList: any = ['Under 50,000', '50,000 to 100,000', '100,000 to 150,000', '150,000 to 200,000', '200,000 to 250,000', '250,000 to 300,000', '300,000 to 350,000', '350,000 to 400,000', '400,000 to 450,000', '450,000 to 500,000', 'Above 500,000'];
  areaList: any = ['Under 500', '500 to 1000', '1000 to 2000', '2000 to 5000', 'Over 5000'];
  statusList: any = ['Active', 'Inactive', 'Draft', 'Rejected'];
  userList: any = ['Royal Class Property', 'Yuliya', 'Royal Class Property-Ra,Royal Class Property-C'];
  primitStatusList: any = ['Valid', 'InValid', 'Pending', 'Malformed', 'Not Provided'];
  listingTypeList: any = ['Basic Listing', 'Hot Listing', 'Signature Listing', 'Developer Listing'];
  validationStatusListing: any = ['Eligible for Validation', 'Checked', 'Document Rejected', 'Document Submitted', 'TruCheck(TM)Validation', 'TrueCheck(TM)Rejected', 'TrueCheck(TM)Initiated'];
  completionList: any = ['Ready', 'Off-Plan'];

  manageSearch: any = [
    { location: '', purpose: '', category: '', beds: '', search: '', price: '', list: '', status: '', user: '', permit: '', type: '', validation: '', completion: '', videoAssign: '', Attached: '', NotAttached: '', tourAttached: '', tourNOtAttached: '', floorAttached: '', floorNotAttached: '' },
  ];

  profolioListingTable: any = [
    { tooltipScore: 'This listing has a Good Score', tootltipCMR: 'This listing is Sourced From CMR System', idRef: ' 5554669/ 2781-Vl-S-0068', type: 'Villa', purpose: ' For Sale', location: '	Amargo', price: '1', bed: '3', quality: '55', listedBy: 'Royal Class Properties', Status: 'Active', date: '11 Dec 2021' },
    { tooltipScore: 'This listing has a Good Score', tootltipCMR: 'This listing is Sourced From CMR System', idRef: ' 5554669/ 2781-Vl-S-1323', type: 'Villa', purpose: ' For Sale', location: '	Amargo', price: '121231654 ', bed: '4', quality: '55', listedBy: 'Royal Class Properties', Status: 'Active', date: '12 Dec 2021' }
  ];
  // exportcsv
  fileDownload() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Report data',
      useBom: true,
      noDownload: false,
      headers: ["tooltipScore", "tootltipCMR", "idREF", "type", "purpose", "location", "price", "bed", "quality", "listedBy", "Status", 'date']
    };
    new ngxCsv(this.profolioListingTable, "Report", options);
  }

  
  constructor() { }
  // Sorting
  onSortTableHeaderClick(colName, currentsort) {
    if (currentsort == 'asc') {
      this.currentsortCount = 'desc';
      this.sortDirCount = -1;
    } else {
      this.currentsortCount = 'asc';
      this.sortDirCount = 1;
    }
    this.currentColName = colName;
    this.profolioListingTable.sort((a, b) => {
      if (!isNaN(a[colName])) {
        if (this.sortDirCount == 1) {
          return a[colName] - b[colName];
        } else {
          return b[colName] - a[colName];
        }
      }
    });
  }


  ngOnInit(): void {
  }

}
