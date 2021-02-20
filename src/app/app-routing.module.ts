import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MagicScrollComponent } from './Pages/magic-scroll/magic-scroll.component';

const routes: Routes = [
  { path: 'MagicScroll', component: MagicScrollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
