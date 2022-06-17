import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceLoginPageRoutingModule } from './attendance-login-routing.module';

import { AttendanceLoginPage } from './attendance-login.page';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceLoginPageRoutingModule
  ],
  declarations: [AttendanceLoginPage],
  providers: [
    Geolocation
]
})
export class AttendanceLoginPageModule {}
