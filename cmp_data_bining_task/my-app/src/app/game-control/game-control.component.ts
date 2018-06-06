import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalEvent = new EventEmitter<number>();
  interval;
  theNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.onPauseGame();
    this.interval = setInterval(()=>{
      this.intervalEvent.emit(this.theNumber + 1);
      this.theNumber++;
    }, 1000);
  }

  onPauseGame(){
    clearInterval(this.interval);
  }

}
