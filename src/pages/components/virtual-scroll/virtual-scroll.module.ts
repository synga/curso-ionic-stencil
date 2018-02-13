import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VirtualScrollPage } from './virtual-scroll';

@NgModule({
  declarations: [
    VirtualScrollPage,
  ],
  imports: [
    IonicPageModule.forChild(VirtualScrollPage),
  ],
})
export class VirtualScrollPageModule {}
