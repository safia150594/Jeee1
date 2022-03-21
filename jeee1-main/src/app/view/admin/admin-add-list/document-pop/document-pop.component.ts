import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-document-pop',
  templateUrl: './document-pop.component.html',
  styleUrls: ['./document-pop.component.scss']
})
export class DocumentPopComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
