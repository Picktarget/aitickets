import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { UserService } from '../../_services/user.service';
import { LoginRouteModule } from './login-routing.module';
import { LoginService } from './login.service';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
      imports: [
            CommonModule,
            LoginRouteModule,
            NgZorroAntdModule,
            FormsModule,
            ReactiveFormsModule
      ],
      declarations: [
            LoginComponent,
      ],
      providers: [
            LoginService
      ]
})
export class LoginModule { }
