import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../models/user';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  loading = false;
  user: User;
  userFromApi?: User;

  constructor(
      private userService: UserService,
      private authenticationService: AuthenticationService
  ) {
      this.user = <User>this.authenticationService.userValue;
  }

  ngOnInit() {
      this.loading = true;
      this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
          this.loading = false;
          this.userFromApi = user;
      });
  }
}
