import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AnalyticsComponent implements OnInit {

  appName = 'CargoCanal >';
  analytic_request = 'total requests';
  analytic_user = 'total users';
  analytic_billing = 'subcription';
  analytic_chart = 'requests';
  chart_description = 'calculated in last 7 days';
  total_requests = '415';
  total_users = '23';
  sub_type = 'Basic';

  constructor(private _router: Router) { }

  public title = '2019 Report - For Week 1 February';

  public data: Object[] = [
    { x: 'Mon', y: 15 }, { x: 'Tue', y: 22 },
    { x: 'Wed', y: 32 },
    { x: 'Thu', y: 31 },
    { x: 'Fri', y: 29 }, { x: 'Sat', y: 24 },
    { x: 'Sun', y: 18 },
  ];

  public data1: Object[] = [
    { x: 'Mon', y: 10 }, { x: 'Tue', y: 18 },
    { x: 'Wed', y: 28 },
    { x: 'Thu', y: 28 },
    { x: 'Fri', y: 26 }, { x: 'Sat', y: 20 },
    { x: 'Sun', y: 15 }
  ];

  public data2: Object[] = [
    { x: 'Mon', y: 2 }, { x: 'Tue', y: 12 },
    { x: 'Wed', y: 22 },
    { x: 'Thu', y: 23 },
    { x: 'Fri', y: 19 }, { x: 'Sat', y: 13 },
    { x: 'Sun', y: 8 },
  ];

  public chartArea: Object = {
    border: {
      width: 0
    }
  };

  public width: string = Browser.isDevice ? '100%' : '60%';

  // Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: 'Category',
    interval: 1, majorGridLines: { width: 0 },
    labelIntersectAction: 'Rotate90'
  };

  // Initializing Primary Y Axis
  public primaryYAxis: Object = {
    /* labelFormat: '{value}°C', */
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 }
  };

  public marker: Object = {
    visible: true,
    width: 10,
    height: 10
  };

  public tooltip: Object = {
    enable: true
  };

  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark');
  }


  ngOnInit() {
  }

  subscribe() {
    this._router.navigate(['/billing']);
  }
}


