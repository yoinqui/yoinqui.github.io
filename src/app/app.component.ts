import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.UpdateTabPageInit();
    this.ActionPage();
  }

  title = 'PersoProject';
  isVisible: boolean;

  public isToolbarVisible(): void {
    this.isVisible = false;
    // this.isVisible = document.location.pathname != "/ComingSoon";
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  private ActionPage(): void {
    let sidebar = document.getElementById("sidebar");
    let menuBtn = document.getElementById("menuBtn");
    let searchBtn = document.getElementById("searchBtn");
    let profilBtn = document.getElementById("profile-details");
    let WebsiteLogo = document.getElementById("WebsiteLogo");
    let NavList = document.getElementById("nav-list").querySelectorAll('li');

    NavList.forEach((item) => {
      if (item.id) {
        item.onclick = function () {
          UpdateTabPage();
        }
      }
    });

    menuBtn.onclick = function () {
      menuBtnChange();
    }

    // Sidebar open when you click on the search iocn
    searchBtn.onclick = function () {
      menuBtnChange();
    }

    profilBtn.onclick = function () {
      window.open('https://github.com/yoinqui', '_blank');
    }

    WebsiteLogo.onclick = function () {
      UpdateTabPage();
    }

    ////////////////////// FUNCTION //////////////////////

    function menuBtnChange(): void {
      sidebar.classList.toggle("open");
      if (sidebar.classList.contains("open")) {
        menuBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
      } else {
        menuBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
      }
    }

    function UpdateTabPage(): void {
      let url = window.location.href;
      var activedPageName = url.split('/')[url.split('/').length - 1];

      console.log(activedPageName);

      let NavList = document
        .getElementById("nav-list")
        .querySelectorAll('li');

      NavList.forEach((item) => {
        if (item.id) {
          if (item.id == activedPageName) {
            //TAB ACTIVE
            item.classList.add("actived");
            let i = document
              .getElementById(item.id)
              .querySelectorAll('i');

            i.forEach((itemI) => {
              if (itemI.id == "active") {
                itemI.classList.remove("disable");
              } else {
                itemI.classList.add("disable");
              }

            });
          } else {
            //TAB INACTIVE
            item.classList.remove("actived");
            let i = document
              .getElementById({ item }.item.id)
              .querySelectorAll('i');

            i.forEach((itemI) => {
              if (itemI.id == "active") {
                itemI.classList.add("disable");
              } else {
                itemI.classList.remove("disable");
              }
            });
          }
        }
      });
    }
  }

  public UpdateTabPageInit(): void {
    let url = window.location.href;
    var activedPageName = url.split('/')[url.split('/').length - 1];

    console.log(activedPageName);

    let NavList = document
      .getElementById("nav-list")
      .querySelectorAll('li');

    NavList.forEach((item) => {
      if (item.id) {
        if (item.id == activedPageName) {
          //TAB ACTIVE
          item.classList.add("actived");
          let i = document
            .getElementById(item.id)
            .querySelectorAll('i');

          i.forEach((itemI) => {
            if (itemI.id == "active") {
              itemI.classList.remove("disable");
            } else {
              itemI.classList.add("disable");
            }

          });
        } else {
          //TAB INACTIVE
          item.classList.remove("actived");
          let i = document
            .getElementById({ item }.item.id)
            .querySelectorAll('i');

          i.forEach((itemI) => {
            if (itemI.id == "active") {
              itemI.classList.add("disable");
            } else {
              itemI.classList.remove("disable");
            }
          });
        }
      }
    });
  }
}