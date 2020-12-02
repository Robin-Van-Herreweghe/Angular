import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DEFAULT_CONFIG, NgForageOptions, NgForageConfig, Driver} from 'ngforage';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // One way of configuring ngForage
    {
      provide: DEFAULT_CONFIG,
      useValue: {
        name: 'MyApp',
        driver: [ // defaults to indexedDB -> webSQL -> localStorage
          Driver.INDEXED_DB,
          Driver.LOCAL_STORAGE
        ]
      } as NgForageOptions
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
