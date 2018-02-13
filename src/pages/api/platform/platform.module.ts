import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlatformPage } from './platform';

@NgModule({
  declarations: [
    PlatformPage,
  ],
  imports: [
    IonicPageModule.forChild(PlatformPage),
  ],
})
export class PlatformPageModule {}
