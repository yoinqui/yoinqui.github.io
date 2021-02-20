import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-magic-scroll',
  templateUrl: './magic-scroll.component.html',
  styleUrls: ['./magic-scroll.component.css']
})
export class MagicScrollComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.UpdateSkewedValuesElements();
  }

  private UpdateSkewedValuesElements(): void {
    const SkewedOne: Element = document.querySelector('.SkewedOne');
    const SkewedTwo: Element = document.querySelector('.SkewedTwo');

    // tslint:disable-next-line:only-arrow-functions
    window.addEventListener('scroll', function(): void {
      const value1 = -12 + window.scrollY / 45;
      const value2 = 12 + window.scrollY / -45;

      SkewedOne.setAttribute('style', 'transform: skewY(' + value1 + 'deg)');
      SkewedTwo.setAttribute('style', 'transform: skewY(' + value2 + 'deg)');
    });
  }
}
