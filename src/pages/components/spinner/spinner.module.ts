import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpinnerPage } from './spinner';

@NgModule({
  declarations: [
    SpinnerPage,
  ],
  imports: [
    IonicPageModule.forChild(SpinnerPage),
  ],
})
export class SpinnerPageModule {}
