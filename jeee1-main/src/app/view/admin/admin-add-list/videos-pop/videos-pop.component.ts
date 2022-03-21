import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-videos-pop',
  templateUrl: './videos-pop.component.html',
  styleUrls: ['./videos-pop.component.scss']
})
export class VideosPopComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
