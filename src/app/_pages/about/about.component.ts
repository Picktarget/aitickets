import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user-model';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-about-page',
  styles: [`
    .profile-card   {
      background: #f3f3f3;
      border-radius: 4px;
      padding: 30px;
      text-align: center;
    }
    .profile-card img  {
      max-width: 50%;
      margin: 15px auto;
    }
  `],
  template: `
    <div class="row" *ngIf="users">
      <div class="col-sm-4" *ngFor="let user of users">
        <div class="profile-card" [routerLink]="['/about', user.username]">
          <h2>{{ user.name }}</h2>
          <p>
            <a href="javascript:">{{ user.username }}</a>
          </p>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent implements OnInit {
  users: User[];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers().then(users => this.users = users);
  }

}
