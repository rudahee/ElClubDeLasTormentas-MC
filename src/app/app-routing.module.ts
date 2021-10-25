import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { ModsComponent } from './components/mods/mods.component';
import { ModDescriptionsComponent } from './components/mod-descriptions/mod-descriptions.component';
import { RulesComponent } from './components/rules/rules.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'empezando', component: GettingStartedComponent },
  { path: '', component: HomeComponent },
  { path: 'lista-mods', component: ModsComponent },
  { path: 'mods', component: ModDescriptionsComponent },
  { path: 'reglas', component: RulesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
