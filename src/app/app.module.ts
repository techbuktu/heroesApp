import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';


// Import the Service classes of the heroesApp
import { HeroService } from './services/hero.service';
import { MessageService } from './services/message.service';
import { MessagesComponent } from './components/messages/messages.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
