import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-mob-accounts',
  templateUrl: './auto-mob-accounts.component.html',
  styleUrls: ['./auto-mob-accounts.component.scss']
})
export class AutoMobAccountsComponent implements OnInit {
accounts:any=[
{accProfile:'../../../../../../assets/logo/j2.jpg',accName:'shift',accEmail:'safia@gmial',phone:'7894564123',status:'active',document:'view',action:'approved'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
