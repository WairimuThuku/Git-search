import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './home/profiles/profiles.component';
import { ProfileService } from './profile.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './home/landing/landing.component';
import { RepositoriesComponent } from './home/repositories/repositories.component';
import { PageComponent } from './home/page/page.component';
import { RepositoriesService } from './repositories.service';
import { ColorPipe } from './color.pipe';
import { ColorDirectiveDirective } from './color-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingComponent,
    RepositoriesComponent,
    PageComponent,
    ColorPipe,
    ColorDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
   
  ],
  providers: [ProfileService, RepositoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }