import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contest } from 'src/app/contests/models/contest';

@Component({
  selector: 'app-join-confirmation',
  templateUrl: './join-confirmation.component.html'
})
export class JoinConfirmationComponent {
  @Input() contest!: Contest;
  @Output() confirmJoin = new EventEmitter<void>();
  @Output() cancelJoin = new EventEmitter<void>();
}
