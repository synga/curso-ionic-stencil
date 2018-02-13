import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplitPanelPage } from './split-panel';

@NgModule({
  declarations: [
    SplitPanelPage,
  ],
  imports: [
    IonicPageModule.forChild(SplitPanelPage),
  ],
})
export class SplitPanelPageModule {}
