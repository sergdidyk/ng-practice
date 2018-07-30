import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') loginForm: NgForm; 
  defaultSubscription = 'Advanced';
  submitted = false;

  userData = {
    email: '',
    subscription: this.defaultSubscription,
    password: ''
  }

  onSubmit() {
    this.submitted = true;
    this.userData.email = this.loginForm.value.email;
    this.userData.subscription = this.loginForm.value.subscription;
    this.userData.password = this.loginForm.value.password;

    console.log(this.userData.email);
    console.log(this.userData.subscription);
    console.log(this.userData.password);

    this.loginForm.reset();
  }

}
