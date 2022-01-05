import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { ItemInfoResultComponent } from './item-info-result/item-info-result.component';
import { ItemInfoResolver } from './services/Item-info.resolver';

// Set Route pages
const routes: Routes = [
  // Home page
  {
    path: '',
    component: HomeComponent,
  },
  // Edit list page
  {
    path: 'edit',
    component: EditListComponent
  },
  {
    path: 'item/:id',
    component: ItemInfoResultComponent,
    resolve: {
      itemResolve: ItemInfoResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
