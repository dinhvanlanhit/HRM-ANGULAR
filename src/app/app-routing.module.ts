import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { LayoutAdminComponent} from './layouts/admin/admin.component';
import { LayoutAuthComponent} from './layouts/auth/auth.component';
//
import { AuthGuard } from './helpers';
// Auth pages
import { AuthComponent} from './components/auth/auth.component';
//Admin pages
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { TimecardComponent } from './components/pages/timecard/timecard.component';
import { TimecardDailyComponent } from './components/pages/timecard-daily/timecard-daily.component';
import {  ProfileComponent} from './components/pages/profile/profile.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      {path: 'auth/login', component: AuthComponent},
    ]
  },
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
      {path: 'timecard', component: TimecardComponent,canActivate:[AuthGuard]},
      {path: 'timecard/daily', component: TimecardDailyComponent,canActivate:[AuthGuard]},
      {path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]},
    ]
  },

  {path: '**', redirectTo: 'dashboard'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
