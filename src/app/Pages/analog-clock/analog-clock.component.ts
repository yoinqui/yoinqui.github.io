import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.UpdateAnalogClockElements();
  }

  private UpdateAnalogClockElements(): void {
    const deg = 6;
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');

    setInterval(() => {
      const day = new Date();
      const hh = day.getHours() * 30;
      const mm = day.getMinutes() * deg;
      const ss = day.getSeconds() * deg;

      hr.setAttribute('style', 'transform: rotateZ(' + (hh + (mm / 12)) + 'deg)');
      mn.setAttribute('style', 'transform: rotateZ(' + mm + 'deg)');
      sc.setAttribute('style', 'transform: rotateZ(' + ss + 'deg)');
    });
  }
}
