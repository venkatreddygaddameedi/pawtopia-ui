import { Injectable } from '@angular/core';
import { User } from 'src/_models/DB/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private users: User[] = [];

  login(credentials: { email: string; password: string }): boolean {
    //TODO: Tempt auth check.
    const tempUser: User = {
      email: 'vanki.g.reddy@gmail.com',
      name: 'Venkat G',
      password: '1234',
      phone: '9966900860',
    };
    this.isAuthenticated = true;
    return true;
    // Example logic for login
    const user = this.users.find(
      (u) =>
        u.email === credentials.email && u.password === credentials.password
    );
    if (user) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  register(user: User): boolean {
    // Example logic for registration
    const exists = this.users.some((u) => u.email === user.email);
    if (!exists) {
      this.users.push(user);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
