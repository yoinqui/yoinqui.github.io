import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottons-animation',
  templateUrl: './bottons-animation.component.html',
  styleUrls: ['./bottons-animation.component.css']
})
export class BottonsAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.OrderBtnAction();
    this.BlubbyBtnAction();
    this.DownloadBtnAction();
    this.DeleteBtnAction();
  }

  /////////////////////////////////////////////////////////
  ////////////////////// ORDER BUTTON /////////////////////
  /////////////////////////////////////////////////////////
  OrderBtnAction(): void {

    let Orderbtn = document.getElementById('order');
    Orderbtn.onclick = function () {
      if (!Orderbtn.classList.contains('animate')) {
        Orderbtn.classList.add('animate');
        setTimeout(() => {
          Orderbtn.classList.remove('animate');
        }, 10000);
      }
    }
  }

  /////////////////////////////////////////////////////////
  //////////////////// BLUBBLY BUTTON /////////////////////
  /////////////////////////////////////////////////////////
  BlubbyBtnAction(): any {
    let Blubblybtn = document.getElementsByClassName("bubbly-button");
    let Blubblybtn2 = document.getElementById("bubbly-button");
    var animateButton = function (e) {
      e.preventDefault;
      //reset animation
      e.target.classList.remove('animate');
      Blubblybtn2.removeAttribute("disabled");

      e.target.classList.add('animate');
      Blubblybtn2.setAttribute("disabled", 'true');
      setTimeout(function () {
        e.target.classList.remove('animate');
        Blubblybtn2.removeAttribute("disabled");
      }, 700);
    };

    for (var i = 0; i < Blubblybtn.length; i++) {
      Blubblybtn[i].addEventListener('click', animateButton, false);
    }
  }

  /////////////////////////////////////////////////////////
  //////////////////// DOWNLOAD BUTTON ////////////////////
  /////////////////////////////////////////////////////////
  DownloadBtnAction(): any {
    const Downloadbtn = document.querySelector(".button_wrapper");

    Downloadbtn.addEventListener("click", () => {
      if (!Downloadbtn.classList.contains("loading")) {
        Downloadbtn.classList.add("loading");
        setTimeout(() => {
          Downloadbtn.classList.add("done");
          setTimeout(() => Downloadbtn.classList.remove("loading", "done"), 1500);
        }, 2400);
      }
    });
  }

  /////////////////////////////////////////////////////////
  //////////////////// DELETE BUTTON //////////////////////
  /////////////////////////////////////////////////////////

  DeleteBtnAction(): any {
    let Deletebtn = document.getElementById('delete');
    Deletebtn.onclick = function () {
      Deletebtn.setAttribute("disabled", 'true');
      Deletebtn.setAttribute("data-running", 'true');

      const resetTrigger = Deletebtn?.querySelector("[data-anim]");
      resetTrigger?.addEventListener("animationend", function () {
        Deletebtn.removeAttribute("disabled");
        Deletebtn.removeAttribute("data-running");
      });
    }
  }

}