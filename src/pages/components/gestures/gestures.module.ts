import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GesturesPage } from './gestures';

@NgModule({
  declarations: [
    GesturesPage,
  ],
  imports: [
    IonicPageModule.forChild(GesturesPage),
  ],
})
export class GesturesPageModule {}
