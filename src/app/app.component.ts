import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registratin with ANgular';
  user = new User();
  users = [];
  success = false;
  onSubmit = function(){

    this.users.push(this.user);
    console.log(this.users);

    this.user = new User();
    this.success = true;
  }
}
