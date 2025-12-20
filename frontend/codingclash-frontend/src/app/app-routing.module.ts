import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [

  /* 🔓 PUBLIC LANDING */
  {
    path: '',
    loadChildren: () =>
      import('./landing/landing.module').then(m => m.LandingModule)
  },

  /* AUTH */
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule)
  },

  /* 🔐 PROTECTED USER APP */
  {
    path: 'app',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'wallet',
        loadChildren: () =>
          import('./wallet/wallet.module').then(m => m.WalletModule)
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'contests',
        loadChildren: () =>
          import('./contests/contests.module').then(m => m.ContestsModule)
      }
    ]
  },

  /* 👑 ADMIN */
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./admin/admin.module').then(m => m.AdminModule)
  },

  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
