import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';

import { HomeComponent } from './home/home.component';
import { StorageListComponent } from './storage-list/storage-list.component';
import { YourTripComponent } from './your-trip/your-trip.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

@NgModule({
  declarations: [HomeComponent, StorageListComponent, YourTripComponent, RoomDetailComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule, AuthModule]
})
export class PagesModule {}
