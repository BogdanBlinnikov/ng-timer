import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-timer';
  miliSeconds = 0;
  seconds = 0;
  minutes = 0;
  intervalMs;
  isSingleClick = true;
  // tslint:disable-next-line:typedef
  startTimer() {
    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick){
        this.intervalMs = setInterval(() => {
          this.miliSeconds++;
          if (this.miliSeconds === 100) {
            this.miliSeconds = 0;
            this.seconds++;
            if (this.seconds === 60) {
              this.seconds = 0;
              this.minutes++;
              if (this.minutes === 60) {
                this.minutes = 0;
              }
            }
          }
        }, 10);
      }
    }, 300);
  }
  // tslint:disable-next-line:typedef
  pauseTimer() {
    this.isSingleClick = false;
    clearInterval(this.intervalMs);
  }
  // tslint:disable-next-line:typedef
  stopTimer(){
    clearInterval(this.intervalMs);
    this.miliSeconds = 0;
    this.seconds = 0;
    this.minutes = 0;
  }
  // tslint:disable-next-line:typedef
  resetTimer(){
    this.miliSeconds = 0;
    this.seconds = 0;
    this.minutes = 0;
  }
}
