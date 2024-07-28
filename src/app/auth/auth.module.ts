import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.modules';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [SharedModule],
})
export class AuthModule {}
