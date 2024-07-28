import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.modules';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [SharedModule],
})
export class SearchModule {}
