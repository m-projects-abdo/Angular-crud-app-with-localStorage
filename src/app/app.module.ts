import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './itemsList/itemsList.component';
import { HeaderComponent } from './header/header.component';
import { MessageAlertComponent } from './message-alert/message-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    HeaderComponent,
    MessageAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
