import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-chequ',
  templateUrl: './chequ.component.html',
  styleUrls: ['./chequ.component.scss']
})
export class ChequComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
