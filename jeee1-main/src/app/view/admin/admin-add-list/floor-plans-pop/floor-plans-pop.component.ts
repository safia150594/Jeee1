import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-floor-plans-pop',
  templateUrl: './floor-plans-pop.component.html',
  styleUrls: ['./floor-plans-pop.component.scss']
})
export class FloorPlansPopComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
