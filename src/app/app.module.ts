import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { ListComponent } from './components/list/list.component';
import { SectionComponent } from './components/section/section.component';
import { AncorBtnComponent } from './components/ancor-btn/ancor-btn.component';
import { AccentBlockComponent } from './components/accent-block/accent-block.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    ListComponent,
    SectionComponent,
    AncorBtnComponent,
    AccentBlockComponent,
    AboutMeComponent,
    ExperienceComponent,
    ContactsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
