import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MagicScrollComponent} from './Pages/magic-scroll/magic-scroll.component';
import {HomeComponent} from './Pages/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'MagicScroll', component: MagicScrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
