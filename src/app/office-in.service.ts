import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class OfficeInService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  getLocationAddress(data) {
    // const headerDict = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'Authorization': ""
    // }
    
    // const requestOptions = {                                                                                                                                                                                 
    //   headers: new HttpHeaders(headerDict), 
    // };
    let params = `geocode/v1/json?q=${data.coords.latitude},${data.coords.longitude}&key=${environment.mapAuth}`;
    return this.http.get(environment.mapUrl+params);
  }
  getMenuCard() {
    return this.firestore.collection("empRecords").snapshotChanges();
  }
}
