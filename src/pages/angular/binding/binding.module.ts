import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BindingPage } from './binding';

@NgModule({
  declarations: [
    BindingPage,
  ],
  imports: [
    IonicPageModule.forChild(BindingPage),
  ],
})
export class BindingPageModule {}
