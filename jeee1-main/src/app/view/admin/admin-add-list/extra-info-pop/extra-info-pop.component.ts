import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-extra-info-pop',
  templateUrl: './extra-info-pop.component.html',
  styleUrls: ['./extra-info-pop.component.scss']
})
export class ExtraInfoPopComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
