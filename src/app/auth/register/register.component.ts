import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/_models/DB/user.model';
import { AuthService } from 'src/_services/auth/auth.service';
import { BaseComponent } from 'src/_services/base.component';
import { LoaderService } from 'src/_services/system/loader.service';
import { NotificationService } from 'src/_services/system/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent extends BaseComponent {
  signupData: User = {
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  constructor(
    authService: AuthService,
    router: Router,
    loaderService: LoaderService,
    notificationService: NotificationService
  ) {
    super(authService, router, loaderService, notificationService);
  }

  onSubmit() {
    this.showLoading();
    const success = this.authService.register(this.signupData);
    if (success) {
      this.navigateTo('/login');
      this.hideLoading();
    } else {
      // Handle registration error (e.g., show a message to the user)
      alert('Registration failed. Please try again.');
      this.hideLoading();
    }
  }
}
