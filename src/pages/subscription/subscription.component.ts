import { Component, OnInit } from '@angular/core';
import { PackageDetailsModel } from 'src/models/packagedetails/packagedetails.model';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
  /* styleUrls: ['../analytics/analytics.component.css', './subscription.component.css'] */
})
export class SubscriptionComponent implements OnInit {

  sub_free = 'basic';
  sub_basic = 'standard';
  sub_pro = 'premium';
  sub_free_price = 10;
  sub_basic_price = 15;
  sub_pro_price = 20;
  sub_expiry = 'Expires on 31-12-2019';
  sub_monthly = 'per month';
  /* packages: PackageDetailsModel = [ */
  packages = [
    {
      'Id': 1,
      'Detail': 'Full Access'
    },
    {
      'Id': 2,
      'Detail': 'Free Updates'
    },
    {
      'Id': 3,
      'Detail': 'Documentation'
    },
    {
      'Id': 4,
      'Detail': 'Customer Support'
    },
    {
      'Id': 5,
      'Detail': 'Unlimited Domains'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
