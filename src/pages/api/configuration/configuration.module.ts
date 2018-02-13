import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigurationPage } from './configuration';

@NgModule({
  declarations: [
    ConfigurationPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigurationPage),
  ],
})
export class ConfigurationPageModule {}
