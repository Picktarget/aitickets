import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user-model';
import { UserService } from '../../_services/user.service';

@Component({
      styles: [`
    img     {
      max-width: 300px;
      margin: 20px auto;
    }
  `],
      template: `
    <a (click)="goBack()" class="btn btn-sm btn-info">Go Back</a>
    <div class="jumbotron text-center" *ngIf="user">
      <h1>{{ user.name }} ({{ user.username }})</h1>
    </div>
  `
})
export class AboutUserComponent implements OnInit {
      user: User;

      constructor(
            private route: ActivatedRoute,
            private service: UserService,
            private router: Router
      ) { }

      ngOnInit() {
            // grab the current username
            const username = this.route.snapshot.params['username'];
            this.service.getUser(username).then(user => this.user = user);
      }

      goBack() {
            this.router.navigate(['/about']);
      }

}
