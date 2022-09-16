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
import { NewBorrowComponent } from './new-borrow/new-borrow.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { AvailableBooksListComponent } from './available-books-list/available-books-list.component';
import { BooksListByCategoryComponent } from './books-list-by-category/books-list-by-category.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { NewAuthorComponent } from './new-author/new-author.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BorrowersListComponent,
    NewBookComponent,
    NewBorrowerComponent,
    BorrowerHistoryListComponent,
    NewBorrowComponent,
    CategoriesListComponent,
    NewCategoryComponent,
    ReturnBookComponent,
    AvailableBooksListComponent,
    BooksListByCategoryComponent,
    AuthorsListComponent,
    NewAuthorComponent
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
