import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestsComponent } from './contests/contests.component';
import { ContestDetailsComponent } from './contest-details/contest-details.component';

const routes: Routes = [
  { path: '', component: ContestsComponent },
  { path: ':id', component: ContestDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestsRoutingModule {}
