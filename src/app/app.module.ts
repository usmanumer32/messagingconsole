import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { HttpModule } from '@angular/http';
import {
  CategoryService,
  DateTimeService,
  ScrollBarService,
  ColumnSeriesService,
  LineSeriesService,
  ChartAnnotationService,
  RangeColumnSeriesService,
  StackingColumnSeriesService,
  LegendService,
  TooltipService
} from '@syncfusion/ej2-angular-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { NavheaderComponent } from '../pages/navheader/navheader.component';
import { FooterComponent } from '../pages/footer/footer.component';
import { LoginComponent } from '../pages/login/login.component';
import { DocumentationComponent } from '../pages/documentation/documentation.component';
import { NavAndPanelComponent } from '../pages/navAndPanel/navAndPanel';
import { SupportComponent } from '../pages/support/support';
import { PageNotFoundComponent } from '../pages/pageNotFound/pageNotFound';
import { AppsComponent } from '../pages/apps/apps';
import { AnalyticsComponent } from '../pages/analytics/analytics.component';
import { SubscriptionComponent } from '../pages/subscription/subscription.component';
import { AvatarModule } from 'ngx-avatar';
import { LeftPanelComponent } from '../pages/leftPanel/leftPanel';
import { DashboardHeaderComponent } from '../pages/dashboardHeader/dashboardHeader';
import { AppLeftPanelComponent } from 'src/pages/apppleftPanel/appleftPanel';
import { AppheaderComponent } from '../pages/appheader/appheader.component';
import { CompanyService } from '../providers/companyProvider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavheaderComponent,
    FooterComponent,
    LoginComponent,
    DocumentationComponent,
    NavAndPanelComponent,
    SupportComponent,
    PageNotFoundComponent,
    AppsComponent,
    AnalyticsComponent,
    SubscriptionComponent,
    LeftPanelComponent,
    AppLeftPanelComponent,
    AppheaderComponent,
    DashboardHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AvatarModule,
    ChartModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'loginform',
        component: LoginComponent
      },
      {
        path: 'apps',
        component: AppsComponent
      },
      {
        path: 'analytics',
        component: AnalyticsComponent
      },
      {
        path: 'doc',
        component: DocumentationComponent
      },
      {
        path: 'billing',
        component: SubscriptionComponent
      },
      {
        path: 'support',
        component: SupportComponent
      }
    ])
  ],
  providers: [
    CompanyService,
    CategoryService,
    DateTimeService,
    ScrollBarService,
    ColumnSeriesService,
    LineSeriesService,
    ChartAnnotationService,
    RangeColumnSeriesService,
    StackingColumnSeriesService,
    LegendService,
    TooltipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
