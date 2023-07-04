import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ServicesComponent } from './Components/services/services.component';
import { ServiceDetailsComponent } from './Components/service-details/service-details.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ResponseComponent } from './Components/response/response.component';
import { DatePipe } from '@angular/common';
import{HttpClientModule}from '@angular/common/http';
import { OnlyNumbersDirective } from './Directives/only-numbers.directive';
import { OnlyLettersDirective } from './Directives/only-letters.directive';
import { NewResponseComponent } from './Components/new-response/new-response.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NaturalTypePipe } from 'src/Pipes/natural-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ServiceDetailsComponent,
    ContactComponent,
    ResponseComponent,
    OnlyNumbersDirective,
    OnlyLettersDirective,
    NewResponseComponent,
    NaturalTypePipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
