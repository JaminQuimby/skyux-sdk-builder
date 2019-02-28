declare var module: any;
import {
  bootstrapWorkerUi,
  WORKER_UI_LOCATION_PROVIDERS
} from '@angular/platform-webworker';

import {
  NgModuleRef
} from '@angular/core';

import {
  platformBrowserDynamic
} from '@angular/platform-browser-dynamic';

import {
  SkyAppBootstrapper
} from '@skyux-sdk/builder/runtime/bootstrapper';

import {
  AppModule
} from './app/app.module';

SkyAppBootstrapper
  .processBootstrapConfig()
  .then((ngModuleRef: NgModuleRef<any>) => {
    bootstrapWorkerUi('otg2017\/webworker.js', WORKER_UI_LOCATION_PROVIDERS);
    if (module.hot) {
      module.hot.accept();
      module.hot.dispose(() => ngModuleRef.destroy());
    }
  });
