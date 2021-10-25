import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './Common/toolbar/toolbar.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { ModsComponent } from './components/mods/mods.component';
import { APP_BASE_HREF } from '@angular/common';
import { ModDescriptionsComponent } from './components/mod-descriptions/mod-descriptions.component';
import { RulesComponent } from './components/rules/rules.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GettingStartedComponent,
    ModsComponent,
    ModDescriptionsComponent,
    RulesComponent,
    HomeComponent,
  ],
  imports: [
    ClipboardModule,
    MatExpansionModule,
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
