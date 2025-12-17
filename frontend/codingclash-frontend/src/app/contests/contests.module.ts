import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestsRoutingModule } from './contests-routing.module';
import { ContestListComponent } from './contest-list/contest-list.component';
import { ContestDetailsComponent } from './contest-details/contest-details.component';
import { ContestRoomComponent } from './contest-room/contest-room.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContestListComponent,
    ContestDetailsComponent,
    LeaderboardComponent,
    ContestRoomComponent
  ],
  imports: [
    CommonModule,
    ContestsRoutingModule,
    SharedModule   // 🔥 THIS FIXES STEP 8.4
  ]
})
export class ContestsModule { }
