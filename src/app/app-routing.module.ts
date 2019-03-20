import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OurScienceComponent } from './our-science/our-science.component';
import { MeetLeonComponent } from './meet-leon/meet-leon.component';
import { ResourcesComponent } from './resources/resources.component';
import { HigherEducationComponent } from './higher-education/higher-education.component';
import { CorporateComponent } from './corporate/corporate.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RequestDemoComponent } from './request-demo/request-demo.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent
  }, {
    path: 'our-science',
    component: OurScienceComponent
  }, {
    path: 'meet-leon',
    component: MeetLeonComponent
  }, {
    path: 'higher-education',
    component: HigherEducationComponent
  }, {
    path: 'corporate',
    component: CorporateComponent
  }, {
    path: 'resources',
    component: ResourcesComponent
  }, {
    path: 'about-us',
    component: AboutUsComponent
  }, {
    path: 'request-demo',
    component: RequestDemoComponent
  }
  // , {
  //   path: '**',
  //   redirectTo: 'HomeComponent'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
