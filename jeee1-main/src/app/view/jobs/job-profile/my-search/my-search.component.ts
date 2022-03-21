import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.scss']
})
export class MySearchComponent implements OnInit {
mysearchList:any=[
  {Automobile:'0',Classifieds:'0',PropertyforSale:'0',PropertyforRent:'0',Jobs:'0',JobsWanted :'0'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
