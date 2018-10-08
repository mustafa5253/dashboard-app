import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeProfileComponent } from './component/employee-profile/employee-profile.component';
import { SocialFeedComponent } from './component/social-feed/social-feed.component';
import { UpcomingEventComponent } from './component/upcoming-event/upcoming-event.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from '../services/dashboard.service';
import { CompanyNewsComponent } from './component/company-news/company-news.component';
import { DirectoryModule } from '../directory/directory.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DirectoryModule
  ],
  declarations: [EmployeeProfileComponent, SocialFeedComponent, UpcomingEventComponent, DashboardComponent, CompanyNewsComponent],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
