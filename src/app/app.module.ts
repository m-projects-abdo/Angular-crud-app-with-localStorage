import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { ItemStore } from './services/ItemStore.service';
import { DateService } from './services/Date.service';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './itemsList/itemsList.component';
import { HeaderComponent } from './header/header.component';
import { MessageAlertComponent } from './message-alert/message-alert.component';
import { ItemStyleDirective } from './Shared/Directives/item-style.directive';
import { ListStyleDirective } from './Shared/Directives/list-style.directive';
import { HomeComponent } from './home/home.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { ItemInfoResultComponent } from './item-info-result/item-info-result.component';
import { ItemsDetailsComponent } from './items-details/items-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    HeaderComponent,
    MessageAlertComponent,
    ItemStyleDirective,
    ListStyleDirective,
    HomeComponent,
    EditListComponent,
    ItemInfoResultComponent,
    ItemsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
