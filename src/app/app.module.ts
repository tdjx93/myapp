import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksListComponent } from './books-list/books-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BorrowersListComponent } from './borrowers-list/borrowers-list.component';
import { NewBookComponent } from './new-book/new-book.component';
import { NewBorrowerComponent } from './new-borrower/new-borrower.component';
import { BorrowerHistoryListComponent } from './borrower-history-list/borrower-history-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BorrowersListComponent,
    NewBookComponent,
    NewBorrowerComponent,
    BorrowerHistoryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
