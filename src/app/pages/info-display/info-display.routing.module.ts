import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoDisplayComponent } from './info-display.component';
import { InfoDisplayListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: InfoDisplayComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: InfoDisplayListComponent,
      },
      {
        path: 'detail',
        component: DetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoDisplayRoutingModule {}
