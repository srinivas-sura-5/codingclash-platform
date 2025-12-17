import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestListComponent } from './contest-list/contest-list.component';
import { ContestDetailsComponent } from './contest-details/contest-details.component';

const routes: Routes = [
  { path: '', component: ContestListComponent },
  { path: ':id', component: ContestDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestsRoutingModule {}
