import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contest } from 'src/app/contests/models/contest';

@Component({
  selector: 'app-join-confirmation',
  templateUrl: './join-confirmation.component.html',
  styleUrls: ['./join-confirmation.component.scss']
})
export class JoinConfirmationComponent {

  @Input() contest!: Contest;
  @Input() walletBalance = 0;

  @Output() confirmJoin = new EventEmitter<void>();
  @Output() cancelJoin = new EventEmitter<void>();

  get balanceAfterJoin(): number {
    return this.walletBalance - this.contest.entryFee;
  }
}
