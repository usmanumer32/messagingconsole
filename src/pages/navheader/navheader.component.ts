import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})

export class NavheaderComponent implements OnInit {

  ngOnInit(): void {
    $(function () {
      const menu = $('nav ul');

      $('#openup').on('click', function (e) {
        e.preventDefault(); menu.slideToggle();
      });

      $(window).resize(function () {
        const w = $(this).width(); if (w > 480 && menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });

      $('nav li').on('click', function (e) {
        const w = $(window).width(); if (w < 480) {
          menu.slideToggle();
        }
      });
      $('.open-menu').height($(window).height());
    });
  }
  constructor() { }
}

