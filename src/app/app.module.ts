import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { ScatterResultSheetComponent } from './features/scatter-result-sheet/scatter-result-sheet.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './features/header/header.component';
import { UserContentInputComponent } from './features/user-content-input/user-content-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ScatterResultSheetComponent,
    HeaderComponent,
    UserContentInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
