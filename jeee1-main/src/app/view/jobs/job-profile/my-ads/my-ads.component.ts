import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent implements OnInit {
  myads:any=[
    {img:'../../../../assets/job/Search engines-bro.png',msg:'You haven’t placed any ads yet'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
