import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class RegistroComponent {
  user: User = new User();

  constructor(private userService: UserService) {}

  registerUser() {
    this.userService.addUser(this.user).subscribe({
      next: (response) => {
        console.log('User registered successfully', response);
        // Reset the form
        this.user = new User();
      },
      error: (error) => {
        console.error('Error registering user', error);
      }
    });
  }
}