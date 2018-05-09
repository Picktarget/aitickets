import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginService } from './login.service';

const LoginRoutes: Routes = [
      {
            path: '',
            component: LoginComponent,
      }
];

@NgModule({
      declarations: [],
      imports: [RouterModule.forChild(LoginRoutes)],
      exports: [RouterModule]
})

export class LoginRouteModule { }
