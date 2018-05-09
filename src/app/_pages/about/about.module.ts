import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-usr.component';
import { UserService } from '../../_services/user.service';
import { AboutRouteModule } from './about-routing.module';
import { AboutSectionComponent } from './about-section.component';

import { AboutUsersResolve } from './about-resolve.service';
import { AboutUserResolve } from './about-user-resolve.service';

@NgModule({
      imports: [
            CommonModule,
            AboutRouteModule
      ],
      declarations: [
            AboutSectionComponent,
            AboutComponent,
            AboutUserComponent
      ],
      providers: [
            UserService, AboutUsersResolve, AboutUserResolve
      ]
})
export class AboutModule { }
