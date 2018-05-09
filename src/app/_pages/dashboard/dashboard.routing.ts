import { CanDeactivateGuard } from './../../_services/can-deactivate-guard.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details.component';
import { AuthGuardService } from '../../_services/auth-guard.service';

export const dashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'users',
        component: DashboardUsersComponent,
        canActivateChild: [AuthGuardService],
        children: [
          {
            path: '',
            component: DashboardUsersHomeComponent,
          },
          {
            path: ':username',
            component: DashboardUserDetailsComponent,
            canDeactivate: [CanDeactivateGuard]
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})

export class DashboardRouteModule { }
