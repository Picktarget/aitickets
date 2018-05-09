import { LayoutModule } from './_pages/layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './_pages/not-found/not-found.component';
import { LoginModule } from './_pages/login/login.module';
import { AuthGuardService } from './_services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '', loadChildren: './_pages/layout/layout.module#LayoutModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'login', loadChildren: './_pages/login/login.module#LoginModule'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRouteModlue {
}
