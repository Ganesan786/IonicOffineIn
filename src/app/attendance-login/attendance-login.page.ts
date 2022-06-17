import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-attendance-login',
  templateUrl: './attendance-login.page.html',
  styleUrls: ['./attendance-login.page.scss'],
})
export class AttendanceLoginPage implements OnInit {

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    
      this.geolocation.getCurrentPosition().then((resp) => {
        // resp.coords.latitude
        // resp.coords.longitude
      }).catch((error) => {
        console.log('Error getting location', error);
      });
      
      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
        console.log(data);
        // data can be a set of coordinates, or an error (if an error occurred).
        // data.coords.latitude
        // data.coords.longitude
      });
  }

}
