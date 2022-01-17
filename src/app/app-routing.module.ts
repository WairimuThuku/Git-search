import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './home/landing/landing.component';
import { PageComponent } from './home/page/page.component';
import { ProfileComponent } from './home/profiles/profiles.component';
import { RepositoriesComponent } from './home/repositories/repositories.component';


const routes: Routes = [
  {path:'home', component:LandingComponent},
  {path:'', component:LandingComponent},
  {path:'users', component:ProfileComponent},
  {path:'repositories', component:RepositoriesComponent},
  {path:'**', component:PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }