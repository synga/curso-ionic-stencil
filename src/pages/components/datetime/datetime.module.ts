import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatetimePage } from './datetime';

@NgModule({
  declarations: [
    DatetimePage,
  ],
  imports: [
    IonicPageModule.forChild(DatetimePage),
  ],
})
export class DatetimePageModule {}
