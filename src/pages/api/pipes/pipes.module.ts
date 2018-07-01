import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesPage } from './pipes';

@NgModule({
  declarations: [
    PipesPage,
  ],
  imports: [
    IonicPageModule.forChild(PipesPage),
  ],
})
export class PipesPageModule {}
