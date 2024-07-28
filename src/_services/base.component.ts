import { Directive } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { LoaderService } from './system/loader.service';
import { NotificationService } from './system/notification.service';

@Directive()
export class BaseComponent {
  isLoading: boolean = false;

  constructor(
    public authService: AuthService,
    public router: Router,
    public loaderService: LoaderService,
    public notificationService: NotificationService
  ) {}

  handleError(error: any) {
    console.error('An error occurred:', error);
    this.notificationService.showError('An error occurred. Please try again.');
  }

  showLoading() {
    this.isLoading = true;
    this.loaderService.show();
  }

  hideLoading() {
    this.isLoading = false;
    this.loaderService.hide();
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US').format(date);
  }

  log(message: string) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  checkAuthentication() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      this.notificationService.showWarning('Please login to access this page.');
    }
  }
}
