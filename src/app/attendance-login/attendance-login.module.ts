import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceLoginPageRoutingModule } from './attendance-login-routing.module';

import { AttendanceLoginPage } from './attendance-login.page';

// geolocation and native-geocoder
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceLoginPageRoutingModule
  ],
  declarations: [AttendanceLoginPage],
  providers: [Geolocation,
    NativeGeocoder]
})
export class AttendanceLoginPageModule {}
