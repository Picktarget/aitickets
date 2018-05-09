import { Injectable } from '@angular/core';
import { User } from '../models/user-model';

const usersPromise: Promise<User[]> = Promise.resolve([
      {
            id: 1,
            name: 'Chris',
            username: 'sevilayha',
      },
      {
            id: 2,
            name: 'Nick',
            username: 'whatnicktweets',
      },
      {
            id: 3,
            name: 'Holly',
            username: 'hollylawly',
      }
]);

@Injectable()
export class UserService {

      // get all users
      getUsers() {
            return usersPromise;
      }

      // find a specific user
      getUser(username) {
            return usersPromise.then(users => users.find(user => user.username === username));

            // let user = usersPromise.then(users => {
            //   return users.find(user => {
            //     return user.username === username;
            //   });
            // });
            // return user;
      }

}
