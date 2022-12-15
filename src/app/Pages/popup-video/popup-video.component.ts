import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-video',
  templateUrl: './popup-video.component.html',
  styleUrls: ['./popup-video.component.css']
})
export class PopupVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.LoadVideoPopup();
  }

  private LoadVideoPopup(): void {
    let btn = document.getElementById('btn');
    let clip = document.getElementById('clip');
    var iframe = document.querySelector('iframe');
    let close = document.getElementById('close');

    btn.onclick = function () {
      btn.classList.add("active");
      clip.classList.add("active");
      iframe.classList.remove("desactive");
    }

    close.onclick = function () {
      btn.classList.remove("active");
      clip.classList.remove("active");
      iframe.classList.add("desactive");
    }
  }
}
