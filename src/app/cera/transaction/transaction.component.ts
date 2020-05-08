import { Component, Input, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
})
export class TransactionComponent implements OnInit {

  @Input() transactions: Array<{
    id?: string;
    index?: number,
    name?: string,
    numberOfTx?: number,
    date?: string,
    total?: string,
    status?: string,
    payment?: string[],
  }>;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  /**
   * Open modal
   * @param content modal content
   */
  // openModal(content: string) {
  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

}
