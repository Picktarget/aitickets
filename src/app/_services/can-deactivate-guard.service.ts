import { User } from './../models/user-model';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<User> {
    private isok = false;
    constructor(private service: UserService) {

    }
    canDeactivate(usr: User) {
        console.log('canDeactivate ........');
        return true;
    }
}
