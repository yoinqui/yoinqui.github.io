import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  countDate = new Date('Jan 1, 2023 00:00:00').getTime();

  constructor() {
  }

  ngOnInit(): void {
    this.timer();
    setInterval(() => {
      this.timer();
    }, 1000);
  }

  private timer(): void {
    var now = new Date().getTime();
    var gap = this.countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / day);
    var h = Math.floor((gap % day) / hour);
    var m = Math.floor((gap % hour) / minute);
    var s = Math.floor((gap % minute) / second);

    document.getElementById('day').innerText = d < 10 ? "0" + d.toString() : d.toString();
    document.getElementById('hour').innerText = h < 10 ? "0" + h.toString() : h.toString();
    document.getElementById('minute').innerText = m < 10 ? "0" + m.toString() : m.toString();
    document.getElementById('second').innerText = s < 10 ? "0" + s.toString() : s.toString();
  }

  public toggle(): void {
    var newsletter = document.querySelector('.newsletter');
    var outside = document.querySelector('.outside');
    newsletter.classList.toggle('active');
    outside.classList.toggle('active');
  }
}