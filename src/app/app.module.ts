import { UserService } from './_services/user.service';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { NgxElectronModule } from 'ngx-electron';
import { AppComponent } from './app.component';
import { AppRouteModlue } from './app-routing.module';
import { NotFoundComponent } from './_pages/not-found/not-found.component';

// import { DashboardModule } from './_pages/dashboard/dashboard.module';
import { AuthGuardService } from './_services/auth-guard.service';
import { CanDeactivateGuard } from './_services/can-deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModlue,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    FormsModule,
    NgxElectronModule,
  ],
  providers: [AuthGuardService, CanDeactivateGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
