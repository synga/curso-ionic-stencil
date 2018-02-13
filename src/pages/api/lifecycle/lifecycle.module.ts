import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifecyclePage } from './lifecycle';

@NgModule({
  declarations: [
    LifecyclePage,
  ],
  imports: [
    IonicPageModule.forChild(LifecyclePage),
  ],
})
export class LifecyclePageModule {}
