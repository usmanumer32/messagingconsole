import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'messagingconsole';
  show: boolean;
  location: string;

  constructor(public router: Router) {
  }

  ngOnInit() {
    /* console.log(this.location); */
  }

  compute(val: number) {
    if (val < 0)
      return 0;
    return ++val;
  }

  greet(name: string) {
    return 'Welocme ' + name;
  }
}
