import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MagicScrollComponent} from './Pages/magic-scroll/magic-scroll.component';
import {HomeComponent} from './Pages/home/home.component';
import {AnalogClockComponent} from './Pages/analog-clock/analog-clock.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'MagicScroll', component: MagicScrollComponent},
  {path: 'AnalogClock', component: AnalogClockComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
