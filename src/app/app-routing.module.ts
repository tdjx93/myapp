import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksListComponent} from "./components/panel/books-list/books-list.component";
import {ReadersListComponent} from "./components/panel/readers-list/readers-list.component";
import {NewBookComponent} from "./components/panel/new-book/new-book.component";
import {MyBorrowListComponent} from "./components/panel/my-borrow-list/my-borrow-list.component";
import {NewBorrowComponent} from "./components/panel/new-borrow/new-borrow.component";
import {CategoriesListComponent} from "./components/panel/categories-list/categories-list.component";
import {NewCategoryComponent} from "./components/panel/new-category/new-category.component";
import {ReturnBookComponent} from "./components/panel/return-book/return-book.component";
import {AvailableBooksListComponent} from "./components/panel/available-books-list/available-books-list.component";
import {BooksListByCategoryComponent} from "./components/panel/books-list-by-category/books-list-by-category.component";
import {AuthorsListComponent} from "./components/panel/authors-list/authors-list.component";
import {NewAuthorComponent} from "./components/panel/new-author/new-author.component";
import {UserRegistrationComponent} from "./components/user-registration/user-registration.component";
import {UserLoginComponent} from "./components/user-login/user-login.component";
import {PanelComponent} from "./components/panel.component";
import {AuthGuardService as AuthGuard} from './services/guard/auth-guard.service';
import {IsLibrarianGuardService as IsLibrarianGuard} from './services/guard/is-librarian-guard.service';
import {IsAdminGuardService as IsAdminGuard} from './services/guard/is-admin-guard.service';
import {ProfileComponent} from "./components/panel/profile/profile.component";
import {LogoutComponent} from "./logout/logout.component";
import {LibrariansListComponent} from "./components/panel/librarians-list/librarians-list.component";
import {BookComponent} from "./components/panel/book/book.component";
import {AuthorComponent} from "./components/panel/author/author.component";
import {NewUsersComponent} from "./components/panel/new-users/new-users.component";
import {SearchResultComponent} from "./components/panel/search-result/search-result.component";
import {BorrowConfirmationComponent} from "./components/panel/borrow-confirmation/borrow-confirmation.component";
import {BorrowsListComponent} from "./components/panel/borrows-list/borrows-list.component";
import {BookListPageComponent} from "./components/panel/book-list-page/book-list-page.component";

const routes: Routes = [
  {
    path: '', component: PanelComponent, canActivate: [AuthGuard],
    children: [
      {path: 'librarians', component: LibrariansListComponent, canActivate: [IsAdminGuard]},
      {path: 'readers', component: ReadersListComponent, canActivate: [IsLibrarianGuard]},    // MULTIPLE GUARDS DO NOT WORK
      {path: 'books', component: BooksListComponent},
      {path: 'books-page', component: BookListPageComponent},
      {path: 'new-book', component: NewBookComponent},
      {path: 'books-available', component: AvailableBooksListComponent},
      {path: 'books-by-category', component: BooksListByCategoryComponent},
      {path: 'books-by-category/:category', component: BooksListByCategoryComponent},
      {path: 'return-book', component: ReturnBookComponent},
      {path: 'my-borrow-list', component: MyBorrowListComponent},
      {path: 'borrows', component: BorrowsListComponent},
      {path: 'new-borrow', component: NewBorrowComponent},
      {path: 'new-borrow/confirm', component: BorrowConfirmationComponent},
      {path: 'categories', component: CategoriesListComponent},
      {path: 'new-category', component: NewCategoryComponent},
      {path: 'authors', component: AuthorsListComponent},
      {path: 'new-author', component: NewAuthorComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'books/:title', component: BookComponent},
      {path: 'authors/:name', component: AuthorComponent},
      {path: 'new-users', component: NewUsersComponent, canActivate: [IsAdminGuard]},
      {path: 'search-result', component: SearchResultComponent},
      {path: 'search-result/:keyWord', component: SearchResultComponent},
    ]
  },
  {path: 'registration', component: UserRegistrationComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
