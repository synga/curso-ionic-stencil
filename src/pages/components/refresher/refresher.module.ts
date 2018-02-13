import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RefresherPage } from './refresher';

@NgModule({
  declarations: [
    RefresherPage,
  ],
  imports: [
    IonicPageModule.forChild(RefresherPage),
  ],
})
export class RefresherPageModule {}
