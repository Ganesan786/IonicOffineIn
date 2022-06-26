import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { OfficeInService } from '../office-in.service';
import { Router } from '@angular/router';

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
  
  constructor(
    private geolocation: Geolocation,
    private officeIn : OfficeInService,
    private router: Router
  ) {
    
  }
  ngOnInit() {
   this.getCurrentCoordinates();
  }
  options = {
    timeout: 20000, 
    enableHighAccuracy: true, 
    maximumAge: 3600
  };

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
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
