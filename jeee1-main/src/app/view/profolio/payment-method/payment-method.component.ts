import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {
  // value: number = 100;
  // options: Options = {
  //   floor: 0,
  //   ceil: 200
  // };
  constructor() { }

  ngOnInit(): void {
  }

}
