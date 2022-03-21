import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-addlist-desc-photo-upload',
  templateUrl: './addlist-desc-photo-upload.component.html',
  styleUrls: ['./addlist-desc-photo-upload.component.scss']
})
export class AddlistDescPhotoUploadComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }
// events: any;
  ngOnInit(): void {
  }
//  urls=[];
//  onselect(e){
//    if(e.target.files){
//      for(let i=0; i < File.length; i++ ){
//           var reader= new FileReader();
//           reader.readAsDataURL(e.target.files[i]);
//           reader.onload=(events:any)=>{
//               this.urls.push(events.target.result);
//             }
//      }
// }
//  }
     
}
