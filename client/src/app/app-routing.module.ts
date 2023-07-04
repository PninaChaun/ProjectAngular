import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './Components/contact/contact.component';

import { HomeComponent } from './Components/home/home.component';
import { NewResponseComponent } from './Components/new-response/new-response.component';
import { ResponseComponent } from './Components/response/response.component';
import { ServiceDetailsComponent } from './Components/service-details/service-details.component';
import { ServicesComponent } from './Components/services/services.component';

const routes: Routes = [
  {path:"", component : HomeComponent},
  {path:"services", component : ServicesComponent, children:
[
  {path:"serviceDetails/:type", component : ServiceDetailsComponent},
]},
{path:"contact", component : ContactComponent},
{path:"response", component : ResponseComponent},
{path:"newResponse", component : NewResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
