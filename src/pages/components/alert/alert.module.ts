import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertPage } from './alert';

@NgModule({
  declarations: [
    AlertPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertPage),
  ],
})
export class AlertPageModule {}
