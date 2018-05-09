import { Component } from '@angular/core';

@Component({
  template: `
    <div class="jumbotron text-center">
      <h1>Welcome to the Dashboard</h1>

      <a routerLink="/dashboard/users" class="btn btn-lg btn-danger">
        Manage Users
      </a>
    </div>
  `,
  styles: [`
  .jumbotron{
    margin-top:120px;
    width:100%;
    height:200px;
    background:red
  }
  `]
})
export class DashboardComponent { }
