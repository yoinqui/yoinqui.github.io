import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MagicScrollComponent} from './Pages/magic-scroll/magic-scroll.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './Pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MagicScrollComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
