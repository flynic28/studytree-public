import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { NavigationComponent } from './shared/layout/navigation/navigation.component';
import { OverlayNavigationComponent } from './shared/layout/overlay-navigation/overlay-navigation.component';
import { HeroComponent } from './shared/hero/hero.component';

import { HomeComponent } from './home/home.component';
import { OurScienceComponent } from './our-science/our-science.component';
import { MeetLeonComponent } from './meet-leon/meet-leon.component';
import { CalloutSectionComponent } from './shared/callout-section/callout-section.component';

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
    CalloutSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
