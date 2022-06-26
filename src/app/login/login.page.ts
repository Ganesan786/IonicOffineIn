import { Component, OnInit } from '@angular/core';
import { OfficeInService } from '../office-in.service';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';  

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm : FormGroup;
  allEmp;

  constructor(private officeIn : OfficeInService, 
    private router: Router,
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: [''],
      pwd: [''],
    });
    this.getAllEmp();
  }

  async openToast() {  
    const toast = await this.toastCtrl.create({  
      message: 'Invalid username or password!',   
      duration: 3000
    });  
    toast.present();  
  }  

  logForm() {
    this.allEmp.filter(res => {
      if(res.userName == this.loginForm.value.userName && res.pwd == this.loginForm.value.pwd) {
        this.router.navigate(['/', 'dashboard']);
      }else {
        this.openToast();
      }
    });
  }

  getAllEmp() {
    this.officeIn.getMenuCard().subscribe(data => {
      this.allEmp = data.map((document) => {
        return {
          id: document.payload.doc.id,
          ...document.payload.doc.data() as {}
        }
      });
      // this.categoryList = chain(this.allEmp)
      // .groupBy("category")
      // .map((value, key) => ({ category: key, items: value }))
      // .value();
      console.log(this.allEmp)
    });
  }

}
