import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_VERSION } from '../tokens/app-version';
import { AppVersion } from '../models/app-version';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: APP_VERSION,
    useValue: AppVersion
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
