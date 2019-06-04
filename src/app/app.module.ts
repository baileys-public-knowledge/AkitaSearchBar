import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBarComponent } from "./SearchBar/search-bar.component";
import { TruncatePipe } from './SearchBar/truncate.pipe';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule],
  declarations: [ AppComponent, SearchBarComponent, TruncatePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
