import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [NavigationComponent, NotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationComponent, NotFoundComponent]
})
export class SharedModule {}
