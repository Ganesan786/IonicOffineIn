import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { OfficeInService } from '../office-in.service';
import { Router } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-attendance-login',
  templateUrl: './attendance-login.page.html',
  styleUrls: ['./attendance-login.page.scss'],
})
export class AttendanceLoginPage implements OnInit  {

  latitude: any = 0; //latitude
  longitude: any = 0; //longitude
  address;
  vilage;
  currentTime;
  currentDate;
  checkIn: any = "00:00";
  checkOut: any = "00:00";
  remainingTime: any = "00:00";
  options = {
    timeout: 20000, 
    enableHighAccuracy: true, 
    maximumAge: 3600
  };
  
  constructor(
    private geolocation: Geolocation,
    private officeIn : OfficeInService,
    private router: Router
  ) {
    
  }

  ngOnInit() {
  this.checkIn = "00:00";
  this.checkOut = "00:00";
   this.getCurrentCoordinates();
   setInterval(() => {
    this.currentTime = moment(new Date).format("hh:mm:ss a");
    this.currentDate = moment(new Date).format("DD MMM YYYY");
    if(moment(new Date).isBefore(moment({ hour:23, minute: 59 }))) {
     // console.log("yes")
    
      if(this.checkIn !== "00:00") {
        var startTime = this.checkIn;
        var endTime = moment(new Date).format("hh:mm");
        var hours = moment
                .duration(moment(endTime, 'hh:mm')
                .diff(moment(startTime, 'hh:mm'))
                );
        //let hr = 
        this.remainingTime = `${hours.hours()} : ${hours.minutes()}`;
      }
      //console.log(hours);
    
    }else {
     // console.log("No")
    }
   },1000)
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

  checkInCall() {
    this.checkIn = moment(new Date).format("hh:mm");
  }

  checkOutCall() {
    //this.router.navigate(['/', 'login']);
    this.checkOut = moment(new Date).format("hh:mm");
    var startTime = this.checkIn;
    var endTime = this.checkOut;
    var hours = moment
            .duration(moment(endTime, 'hh:mm')
            .diff(moment(startTime, 'hh:mm'))
            );
    this.remainingTime = `${hours.hours()} : ${hours.minutes()}`;
  }

  logOut() {
    this.router.navigate(['/', 'login']);
  }
  
  // use geolocation to get user's device coordinates
  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.officeIn.getLocationAddress(resp).subscribe((res:any) => {
        let addressData = res.results[0];
        this.vilage = addressData.components.village+', ';
        this.address = addressData.components.state_district+" - "
        +addressData.components.postcode;
        //console.log();
      })
     }).catch((error) => {
       console.log('Error getting location', error);
     });

    
  }
}
