import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchbarPage } from './searchbar';

@NgModule({
  declarations: [
    SearchbarPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchbarPage),
  ],
})
export class SearchbarPageModule {}
