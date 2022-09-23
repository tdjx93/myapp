import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BooksListComponent} from './components/panel/books-list/books-list.component';
import {AppRoutingModule} from './app-routing.module';
import {BorrowersListComponent} from './components/panel/borrowers-list/borrowers-list.component';
import {NewBookComponent} from './components/panel/new-book/new-book.component';
import {MyBorrowListComponent} from './components/panel/my-borrow-list/my-borrow-list.component';
import {NewBorrowComponent} from './components/panel/new-borrow/new-borrow.component';
import {CategoriesListComponent} from './components/panel/categories-list/categories-list.component';
import {NewCategoryComponent} from './components/panel/new-category/new-category.component';
import {ReturnBookComponent} from './components/panel/return-book/return-book.component';
import {AvailableBooksListComponent} from './components/panel/available-books-list/available-books-list.component';
import {BooksListByCategoryComponent} from './components/panel/books-list-by-category/books-list-by-category.component';
import {AuthorsListComponent} from './components/panel/authors-list/authors-list.component';
import {NewAuthorComponent} from './components/panel/new-author/new-author.component';
import {UserRegistrationComponent} from './components/user-registration/user-registration.component';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {PanelComponent} from './components/panel.component';
import {httpInterceptorProviders} from './http-interceptors';
import {ProfileComponent} from './components/panel/profile/profile.component';
import {LogoutComponent} from './logout/logout.component';
import { MyBorrowsComponent } from './components/panel/my-borrows/my-borrows.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BorrowersListComponent,
    NewBookComponent,
    MyBorrowListComponent,
    NewBorrowComponent,
    CategoriesListComponent,
    NewCategoryComponent,
    ReturnBookComponent,
    AvailableBooksListComponent,
    BooksListByCategoryComponent,
    AuthorsListComponent,
    NewAuthorComponent,
    PanelComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    ProfileComponent,
    LogoutComponent,
    MyBorrowsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
