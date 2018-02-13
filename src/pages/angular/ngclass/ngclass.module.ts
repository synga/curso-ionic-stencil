import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgclassPage } from './ngclass';

@NgModule({
  declarations: [
    NgclassPage,
  ],
  imports: [
    IonicPageModule.forChild(NgclassPage),
  ],
})
export class NgclassPageModule {}
