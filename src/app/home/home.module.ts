import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.modules';

import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [FeedComponent],
  imports: [SharedModule],
})
export class HomeModule {}
