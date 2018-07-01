import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectivesPage } from './directives';

@NgModule({
  declarations: [
    DirectivesPage,
  ],
  imports: [
    IonicPageModule.forChild(DirectivesPage),
  ],
})
export class DirectivesPageModule {}
