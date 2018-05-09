import { AboutSectionComponent } from './about-section.component';
import { AboutUserComponent } from './about-usr.component';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const aboutRoutes: Routes = [
      {
            path: '',
            component: AboutSectionComponent,
            children: [
                  {
                        path: '',
                        component: AboutComponent,
                        // resolve: {
                        //       users: AboutUsersResolve
                        // }
                  },
                  {
                        path: ':username',
                        component: AboutUserComponent,
                        // resolve: {
                        //       user: AboutUserResolve
                        // }
                  }
            ]
      }
];

@NgModule({
      declarations: [],
      imports: [RouterModule.forChild(aboutRoutes)],
      exports: [RouterModule]
})

export class AboutRouteModule { }
