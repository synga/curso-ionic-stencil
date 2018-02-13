import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListsPage } from './lists';

@NgModule({
  declarations: [
    ListsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListsPage),
  ],
})
export class ListsPageModule {}
