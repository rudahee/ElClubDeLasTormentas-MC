import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { ModsComponent } from './components/mods/mods.component';

const routes: Routes = [
  { path: 'empezando', component: GettingStartedComponent },
  { path: '', component: ModsComponent },
  { path: 'mods', component: ModsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
