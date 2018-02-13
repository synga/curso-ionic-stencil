import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfiniteScrollPage } from './infinite-scroll';

@NgModule({
  declarations: [
    InfiniteScrollPage,
  ],
  imports: [
    IonicPageModule.forChild(InfiniteScrollPage),
  ],
})
export class InfiniteScrollPageModule {}
