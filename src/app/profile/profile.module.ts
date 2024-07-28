import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.modules';
import { ParentProfileComponent } from './parent/parent.component';
import { PetProfileComponent } from './pet/pet.component';

@NgModule({
  declarations: [ParentProfileComponent, PetProfileComponent],
  imports: [SharedModule],
})
export class ProfileModule {}
