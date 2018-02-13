import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButtonsPage } from './buttons';

@NgModule({
  declarations: [
    ButtonsPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonsPage),
  ],
})
export class ButtonsPageModule {}
