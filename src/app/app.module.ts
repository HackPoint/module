import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GeDemoComponent } from './ge-demo/ge-demo.component';
import { GeStandaloneComponent } from './ge-standalone/ge-standalone.component';

@NgModule({
  imports: [BrowserModule, FormsModule, GeStandaloneComponent],
  declarations: [AppComponent, GeDemoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
