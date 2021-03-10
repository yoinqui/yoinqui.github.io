import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MagicScrollComponent} from './Pages/magic-scroll/magic-scroll.component';
import {HomeComponent} from './Pages/home/home.component';
import {AnalogClockComponent} from './Pages/analog-clock/analog-clock.component';
import {NeumorphismComponent} from './Pages/neumorphism/neumorphism.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'MagicScroll', component: MagicScrollComponent},
  {path: 'AnalogClock', component: AnalogClockComponent},
  {path: 'Neumorphism', component: NeumorphismComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
