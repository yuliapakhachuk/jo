import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [ 
    { path: '', component: HomePageComponent, pathMatch: 'full' },
    { path: 'about-me', component: AboutMeComponent},
    { path: 'experience', component: ExperienceComponent},
    { path: 'contacts', component: ContactsComponent},
    { path: '**', redirectTo: '' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
