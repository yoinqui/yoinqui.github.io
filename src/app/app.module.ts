import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MagicScrollComponent} from './Pages/magic-scroll/magic-scroll.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './Pages/home/home.component';
import {AnalogClockComponent} from './Pages/analog-clock/analog-clock.component';
import {NeumorphismComponent} from './Pages/neumorphism/neumorphism.component';
import {FocusComponent} from './Pages/focus/focus.component';
import {LoginRegistrationComponent} from './Pages/login-registration/login-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MagicScrollComponent,
    AnalogClockComponent,
    NeumorphismComponent,
    FocusComponent,
    LoginRegistrationComponent,
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
