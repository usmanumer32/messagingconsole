import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

  appName = 'CargoCanal';

  constructor(private _location: Location, private _router: Router) { }

  ngOnInit() {
  }

  activebackground(activeButton) {
    const x = document.querySelectorAll('.menu-items');
    const y = document.querySelectorAll(activeButton);
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove('active-background');
    }
    for (let j = 0; j < y.length; j++) {
      y[j].classList.add('active-background');
    }
  }

  openMenu() {
    /* console.log('menu called'); */
    const x = document.querySelectorAll('.overlay-menu');
    /* console.log(x.length); */
    for (let i = 0; i < x.length; i++) {
      x[i].classList.toggle('openMenu');
    }
  }

  backClicked() {
    this._location.back();
  }

}
