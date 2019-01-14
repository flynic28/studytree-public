import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OurScienceComponent } from './our-science/our-science.component';
import { MeetLeonComponent } from './meet-leon/meet-leon.component';

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
    component: OurScienceComponent
  }, {
    path: 'corporate',
    component: MeetLeonComponent
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
