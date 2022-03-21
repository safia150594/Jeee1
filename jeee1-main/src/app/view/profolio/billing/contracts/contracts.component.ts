import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  isShowContractView: Boolean = false;
  contractActive=[
    {id:'14162',startingEndingDate:'26 Sept 2021 - 26 Sept 2022',totalAmount:'98,500',outstandingAmount:'81,900',recrumentPaymentMethod:'../../../../../assets/bank/visa.png',card:'2'},
    {id:'14162',startingEndingDate:'26 Sept 2021 - 26 Sept 2022',totalAmount:'98,500',outstandingAmount:'81,900',recrumentPaymentMethod:'../../../../../assets/bank/visa.png',card:'2'},
  ];
contractView=[
  {paymentDate:'12 Sep 2021',Reference:'Auto-Debit 97557',Amount:'8,190',Status:'Completed',paymentMethod:'../../../../../assets/bank/visa.png',card:'2'},
  {paymentDate:'26 Oct 2021',Reference:'AUTO-DEBIT 97558',Amount:'8,190',Status:'Completed',paymentMethod:'../../../../../assets/bank/visa.png',card:'852'},
  {paymentDate:'12 Sep 2021',Reference:'97559',Amount:'8,190',Status:'Scheduled',paymentMethod:'../../../../../assets/bank/visa.png',card:'123'},
];
  toggleview() {
    this.isShowContractView = !this.isShowContractView;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
