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
    let video = document.querySelector('video');
    let close = document.getElementById('close');
    console.log(btn);
    btn.onclick = function(){
      btn.classList.add("active");
      clip.classList.add("active");
      video.play();
      video.currentTime = 0;
    }
    close.onclick = function(){
      btn.classList.remove("active");
      clip.classList.remove("active");
      video.pause();
    }
  }
}
