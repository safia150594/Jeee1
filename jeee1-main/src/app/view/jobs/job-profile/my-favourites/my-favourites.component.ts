import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-favourites',
  templateUrl: './my-favourites.component.html',
  styleUrls: ['./my-favourites.component.scss']
})
export class MyFavouritesComponent implements OnInit {
myFav:any=[
  {img:'../../../../assets/job/Search engines-bro.png',msg:'Your favorites is empty'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
