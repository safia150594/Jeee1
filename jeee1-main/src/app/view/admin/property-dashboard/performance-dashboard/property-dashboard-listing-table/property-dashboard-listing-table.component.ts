import { Component, OnInit } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-property-dashboard-listing-table',
  templateUrl: './property-dashboard-listing-table.component.html',
  styleUrls: ['./property-dashboard-listing-table.component.scss']
})
export class PropertyDashboardListingTableComponent implements OnInit {
  maxSize = 5;
  bigTotalItems = 400;
  bigCurrentPage = 1;

  sortList:any=['Sort By Impression','Sort By View','Sort By Leads'];
  sorting:any=[
    {Sorts:''}
  ];

  listingTable:any=[
    {refId:'2781-Of-R-0024',officeSpace:'Office space',area:'Business Bay',type:'Office for Rent',propertytype:'Commercial for Rent',impression:'258',view:'10',leads:'6'},
    {refId:'2781-Of-R-0024',officeSpace:'Office space',area:'Business Bay',type:'Office for Rent',propertytype:'Commercial for Rent',impression:'28',view:'120',leads:'61'},
    {refId:'2781-Of-R-0024',officeSpace:'Office space',area:'Business Bay',type:'Office for Rent',propertytype:'Commercial for Rent',impression:'8',view:'1',leads:'16'}
  ];
  currentsortCount: string;
  sortDirCount: number;
  currentColName: any;
  reportsList: any;
  fileDownload(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Report data',
      useBom: true,
      noDownload: false,
      headers: ["refId", "officeSpace", "area","type","propertytype","impression","view","leads"]
    };
    new ngxCsv(this.listingTable, "Report", options);
  }
  constructor() { }

  onSortTableHeaderClick(colName, currentsort) {
    if (currentsort == 'asc') {
      this.currentsortCount = 'desc';
      this.sortDirCount = -1;
    } else {
      this.currentsortCount = 'asc';
      this.sortDirCount = 1;
    }
    this.currentColName = colName;
    this.listingTable.sort((a, b) => {
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
