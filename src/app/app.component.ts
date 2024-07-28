import { Component } from '@angular/core';
import { AuthService } from 'src/_services/auth/auth.service';
import { LoaderService } from 'src/_services/system/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isCollapsed = false;

  constructor(
    public authService: AuthService,
    public loaderService: LoaderService
  ) {}
}
