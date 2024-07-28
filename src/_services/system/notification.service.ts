import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

export interface Notification {
  message: string;
  isSuccess: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private nzNotificationService: NzNotificationService) {}

  showSuccess(message: string, title: string = 'Success'): void {
    this.nzNotificationService.success(title, message, {
      nzPlacement: 'top',
    });
  }

  showError(message: string, title: string = 'Error'): void {
    this.nzNotificationService.error(title, message, {
      nzPlacement: 'top',
    });
  }

  showWarning(message: string, title: string = 'Warning') {
    this.nzNotificationService.warning(title, message, {
      nzPlacement: 'top',
    });
  }
}
