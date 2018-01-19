import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }      from '@angular/http';
import { FormsModule }      from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.Component';
import { ChildInfoComponent }  from './components/childinfo.comp';
import { HomeComponent }  from './components/home.comp';
import { routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing ],
  declarations: [ AppComponent, UserComponent, ChildInfoComponent, HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
