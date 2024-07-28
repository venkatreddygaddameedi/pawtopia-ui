import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/_services/auth/auth.service';
import { BaseComponent } from 'src/_services/base.component';
import { LoaderService } from 'src/_services/system/loader.service';
import { NotificationService } from 'src/_services/system/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Add your own styles
})
export class LoginComponent extends BaseComponent {
  loginData = {
    email: '',
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
    const isLoggedIn = this.authService.login(this.loginData);
    if (isLoggedIn) {
      this.navigateTo('/home');
      this.hideLoading();
    } else {
      // Handle login error (e.g., show a message to the user)
      this.handleError(
        'Login failed. Please check your credentials and try again.'
      );
      this.hideLoading();
    }
  }
}
