import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';

import { PublicLayoutComponent } from './layouts/public-layout/public-layout/public-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout/user-layout.component';

const routes: Routes = [

  // 🌐 PUBLIC
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./landing/landing.module').then(m => m.LandingModule)
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },

  // 🔐 USER APP
  {
    path: 'app',
    component: UserLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'contests',
        loadChildren: () =>
          import('./contests/contests.module').then(m => m.ContestsModule)
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
      }
    ]
  },

  // 👑 ADMIN
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./admin/admin.module').then(m => m.AdminModule)
  },

  { path: 'contests', loadChildren: () => import('./contests/contests.module').then(m => m.ContestsModule) },

  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
