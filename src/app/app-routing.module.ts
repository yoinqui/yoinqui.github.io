import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagicScrollComponent } from './Pages/magic-scroll/magic-scroll.component';
import { HomeComponent } from './Pages/home/home.component';
import { AnalogClockComponent } from './Pages/analog-clock/analog-clock.component';
import { NeumorphismComponent } from './Pages/neumorphism/neumorphism.component';
import { FocusComponent } from './Pages/focus/focus.component';
import { IsometricDesignComponent } from './Pages/isometric-design/isometric-design.component';
import { PopupVideoComponent } from './Pages/popup-video/popup-video.component';
import { ComingSoonComponent } from './Pages/coming-soon/coming-soon.component';
import { BuildingLuminosityComponent } from './Pages/building-luminosity/building-luminosity.component';
import { BottonsAnimationComponent } from './Pages/bottons-animation/bottons-animation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'MagicScroll', component: MagicScrollComponent },
  { path: 'AnalogClock', component: AnalogClockComponent },
  { path: 'Neumorphism', component: NeumorphismComponent },
  { path: 'Focus', component: FocusComponent },
  { path: 'IsoDesign', component: IsometricDesignComponent },
  { path: 'PopupVideo', component: PopupVideoComponent },
  { path: 'ComingSoon', component: ComingSoonComponent },
  { path: 'BuildingLuminosity', component: BuildingLuminosityComponent },
  { path: 'BottonsAnimation', component: BottonsAnimationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}