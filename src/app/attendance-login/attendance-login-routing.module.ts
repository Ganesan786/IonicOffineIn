import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceLoginPage } from './attendance-login.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceLoginPageRoutingModule {}
