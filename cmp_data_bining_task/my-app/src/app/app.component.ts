import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalEvent(myNumber: number) {
    if(myNumber%2 === 0){
      this.evenNumbers.push(myNumber);
    }else{
      this.oddNumbers.push(myNumber);
    }
  }
}
