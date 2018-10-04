import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeProfileComponent } from './component/employee-profile/employee-profile.component';
import { SocialFeedComponent } from './component/social-feed/social-feed.component';
import { UpcomingEventComponent } from './component/upcoming-event/upcoming-event.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmployeeProfileComponent, SocialFeedComponent, UpcomingEventComponent]
})
export class DashboardModule { }
