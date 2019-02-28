// This is only visible in EASY MODE
import {
  NgModule
} from '@angular/core';

import {
  BrowserModule
} from '@angular/platform-browser';

import {
  RouterModule
} from '@angular/router';

import {
  AppComponent
} from './app.component';

import {
  WorkerAppModule,
  WORKER_APP_LOCATION_PROVIDERS
} from '@angular/platform-webworker';

import {
  APP_BASE_HREF
} from '@angular/common'

// File is dynamically built using webpack loader

import {
  SkyPagesModule
} from './sky-pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WorkerAppModule,
    BrowserModule,
    RouterModule,
    SkyPagesModule
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  },
    WORKER_APP_LOCATION_PROVIDERS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
