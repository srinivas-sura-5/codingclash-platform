import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContestsRoutingModule } from './contests-routing.module';
import { ContestsComponent } from './contests/contests.component';
import { ContestDetailsComponent } from './contest-details/contest-details.component';
import { SharedModule } from '../shared/shared.module'; // ✅ ADD THIS

@NgModule({
  declarations: [
    ContestsComponent,
    ContestDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContestsRoutingModule,
    SharedModule   // ✅ THIS LINE FIXES EVERYTHING
  ]
})
export class ContestsModule {}
