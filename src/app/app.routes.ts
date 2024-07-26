import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InfoDisplayModule } from './pages/info-display/info-display.module';
import { TestPageComponent } from './pages/test-page/test-page.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    data: {
      scrollDisabled: true,
      breadcrumb: '',
      isHeader: true,
      isNewRoute: true,
    },
    children: [
      {
        path: 'display-info',
        loadChildren: () => InfoDisplayModule,
      },
      {
        path: 'test-page',
        component: TestPageComponent,
      },
    ],
  },
];
