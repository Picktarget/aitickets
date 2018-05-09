import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm; // 登录表单
  public regForm; // 注册表单
  public logo = 'AI Tickets'; // logo文字内容
  public loginOrReg = true; // 前往登录还是注册
  public isLoadingLogin = false; // 控制登录按钮loading状态
  public isLoadingReg = false; // 控制注册按钮loading状态

  constructor(
    private fb: FormBuilder,
    private router: Router) {
    this.loginForm = this.fb.group({
      userName: ['', {
        validators: [Validators.required, Validators.maxLength(64)]
      }],
      password: ['', {}]
    });
    this.regForm = this.fb.group({
      userName: ['', {
        validators: [Validators.required, Validators.maxLength(64)]
      }],
      password: ['', {}],
      re_password: ['', {}],
      captcha: ['', {}]
    });
  }

  ngOnInit() {
  }

  /**
   * 前往注册页面
   */
  gotoReg() {
    this.loginOrReg = false;
  }

  /**
   * 前往登录页面
   */
  gotoLogin() {
    this.loginOrReg = true;
  }

  /**
   * 登录
   */
  login($event) {
    this.isLoadingLogin = true;
    setTimeout(() => {
      this.isLoadingLogin = false;
      sessionStorage.setItem('usrinfo', window.btoa('abcde'));
      this.router.navigate(['/home']);
    }, 2000);
  }

  /**
   * 注册
   */
  register($event) {
    this.isLoadingReg = true;
    setTimeout(() => {
      this.isLoadingReg = false;
    }, 2000);
  }
}
