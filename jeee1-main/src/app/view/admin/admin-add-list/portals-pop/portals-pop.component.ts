import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-portals-pop',
  templateUrl: './portals-pop.component.html',
  styleUrls: ['./portals-pop.component.scss']
})
export class PortalsPopComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
