import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { ReactiveFormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

const sharedModulesList = [
  CommonModule,
  FormsModule,
  NzLayoutModule,
  NzMenuModule,
  NzInputModule,
  NzFormModule,
  NzButtonModule,
  NzTableModule,
  NzCheckboxModule,
  NzButtonModule,
  NzUploadModule,
  NzInputModule,
  NzGridModule,
  NzSelectModule,
  NzDrawerModule,
  NzModalModule,
  NzFormModule,
  NzDescriptionsModule,
  NzCardModule,
  NzListModule,
  NzSwitchModule,
  NzDatePickerModule,
  NzCollapseModule,
  NzToolTipModule,
  NzSpinModule,
  NzAlertModule,
  NzNotificationModule,
  NzStepsModule,
  ReactiveFormsModule,
  NzDividerModule,
];

@NgModule({
  declarations: [],
  imports: [...sharedModulesList],
  exports: [...sharedModulesList],
})
export class SharedModule {}
