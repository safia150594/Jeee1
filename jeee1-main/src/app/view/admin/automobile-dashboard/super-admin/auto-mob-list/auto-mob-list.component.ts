import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-mob-list',
  templateUrl: './auto-mob-list.component.html',
  styleUrls: ['./auto-mob-list.component.scss']
})
export class AutoMobListComponent implements OnInit {
  isShowList:Boolean=true;
  toggleShowAutoList(){
      this.isShowList=!this.isShowList;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
