import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgswitchPage } from './ngswitch';

@NgModule({
  declarations: [
    NgswitchPage,
  ],
  imports: [
    IonicPageModule.forChild(NgswitchPage),
  ],
})
export class NgswitchPageModule {}
