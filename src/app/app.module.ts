import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksListComponent } from './components/books-list/books-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BorrowersListComponent } from './components/borrowers-list/borrowers-list.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { NewBorrowerComponent } from './components/new-borrower/new-borrower.component';
import { BorrowerHistoryListComponent } from './components/borrower-history-list/borrower-history-list.component';
import { NewBorrowComponent } from './components/new-borrow/new-borrow.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { ReturnBookComponent } from './components/return-book/return-book.component';
import { AvailableBooksListComponent } from './components/available-books-list/available-books-list.component';
import { BooksListByCategoryComponent } from './components/books-list-by-category/books-list-by-category.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { NewAuthorComponent } from './components/new-author/new-author.component';
import { HomeComponent } from './components/home/home.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

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
    NewAuthorComponent,
    HomeComponent,
    UserRegistrationComponent,
    UserLoginComponent
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
