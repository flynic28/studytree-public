import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OurScienceComponent } from './our-science/our-science.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent
  }, {
    path: 'our-science',
    component: OurScienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
