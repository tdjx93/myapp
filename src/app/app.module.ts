import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksListComponent } from './books-list/books-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BorrowersListComponent } from './borrowers-list/borrowers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BorrowersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
