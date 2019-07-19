import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [{
  path: 'Login',
  component:LoginComponent
},
{
  path: '**',
  component:LandingPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
