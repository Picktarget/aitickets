import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable()

export class AuthGuardService implements CanActivate, CanActivateChild {
	constructor(
		private router: Router) { }
	canActivate() {
		/*
		* 验证父级路由是否有权限
		*/
		const ck = sessionStorage.getItem('usrinfo');
		if (!ck) {
			this.router.navigate(['/login']);
			return false;
		} else {
			return true;
		}
	}
	canActivateChild() {
		/*
		* 验证子路由是否有权限
		*/
		const ck = sessionStorage.getItem('usrinfo');
		if (!ck) {
			this.router.navigate(['/login']);
			return false;
		} else {
			return true;
		}
	}
}
