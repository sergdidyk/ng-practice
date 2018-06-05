import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binder',
  templateUrl: './binder.component.html',
  styleUrls: ['./binder.component.css']
})
export class BinderComponent implements OnInit {
  userName = '';

  constructor() { 
   
  }

  ngOnInit() {}

  onResetUserName() {
    this.userName = '';
  }

}
