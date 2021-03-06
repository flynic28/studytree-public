import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxTextOverflowClampModule } from 'ngx-text-overflow-clamp';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { NavigationComponent } from './shared/layout/navigation/navigation.component';
import { OverlayNavigationComponent } from './shared/layout/overlay-navigation/overlay-navigation.component';
import { HeroComponent } from './shared/hero/hero.component';
import { ResourceItemComponent } from './shared/resource-item/resource-item.component';
import { CalloutSectionComponent } from './shared/callout-section/callout-section.component';

import { HomeComponent } from './home/home.component';
import { OurScienceComponent } from './our-science/our-science.component';
import { MeetLeonComponent } from './meet-leon/meet-leon.component';
import { ResourcesComponent } from './resources/resources.component';
import { RowSectionComponent } from './shared/row-section/row-section.component';
import { HigherEducationComponent } from './higher-education/higher-education.component';
import { CorporateComponent } from './corporate/corporate.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RequestDemoComponent } from './request-demo/request-demo.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OurScienceComponent,
    NavigationComponent,
    OverlayNavigationComponent,
    MeetLeonComponent,
    HeroComponent,
    CalloutSectionComponent,
    ResourcesComponent,
    ResourceItemComponent,
    RowSectionComponent,
    HigherEducationComponent,
    CorporateComponent,
    AboutUsComponent,
    RequestDemoComponent,
    TermsOfServiceComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxTextOverflowClampModule,
    FontAwesomeModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faBars, faTimes);
  }
}
