import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenusPage } from './menus';

@NgModule({
  declarations: [
    MenusPage,
  ],
  imports: [
    IonicPageModule.forChild(MenusPage),
  ],
})
export class MenusPageModule {}
