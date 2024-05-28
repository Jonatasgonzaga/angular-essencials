import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    AppComponent, 
    UserComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // IF I SIMPLY ADD A NEW COMPONENT, IT WILL RUN AN ADDITIONAL ANGULAR APP  
})
export class AppModule { }


//HERE WE DECLARE EVERY SINGLE COMPONENT, EVERY NEW ONE WE ADD TO THE PROJECT 