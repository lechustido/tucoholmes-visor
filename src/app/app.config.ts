import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfoDisplayModule } from './pages/info-display/info-display.module';
import { environment } from '../environments/environment';
import { IesacommonAngularRestModule } from 'iesa-common-angular-rest';
import { provideToastr } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(InfoDisplayModule),
    importProvidersFrom(
      IesacommonAngularRestModule.forRoot(environment, HttpClient)
    ),
    provideToastr(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) =>
            new TranslateHttpLoader(
              http,
              'https://gfcloud-db73.kxcdn.com/assets/i18n/',
              '.json'
            ),
          deps: [HttpClient],
        },
        defaultLanguage: 'es',
      })
    ),
  ],
};
