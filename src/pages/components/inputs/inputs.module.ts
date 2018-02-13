import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputsPage } from './inputs';

@NgModule({
  declarations: [
    InputsPage,
  ],
  imports: [
    IonicPageModule.forChild(InputsPage),
  ],
})
export class InputsPageModule {}
