import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksListComponent} from "./components/panel/books-list/books-list.component";
import {BorrowersListComponent} from "./components/panel/borrowers-list/borrowers-list.component";
import {NewBookComponent} from "./components/panel/new-book/new-book.component";
import {NewBorrowerComponent} from "./components/panel/new-borrower/new-borrower.component";
import {BorrowerHistoryListComponent} from "./components/panel/borrower-history-list/borrower-history-list.component";
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

const routes: Routes = [
  {path: '', component: PanelComponent, children: [
      {path: 'books', component: BooksListComponent},
      {path: 'new-book', component: NewBookComponent},
      {path: 'books-available', component: AvailableBooksListComponent},
      {path: 'books-by-category', component: BooksListByCategoryComponent},
      {path: 'books-by-category/:category', component: BooksListByCategoryComponent},
      {path: 'return-book', component: ReturnBookComponent},
      {path: 'borrowers', component: BorrowersListComponent},
      {path: 'borrowers/:id/history', component: BorrowerHistoryListComponent},
      {path: 'new-borrower', component: NewBorrowerComponent},
      {path: 'new-borrow', component: NewBorrowComponent},
      {path: 'categories', component: CategoriesListComponent},
      {path: 'new-category', component: NewCategoryComponent},
      {path: 'authors', component: AuthorsListComponent},
      {path: 'new-author', component: NewAuthorComponent},
    ]},
  {path: 'registration', component: UserRegistrationComponent},
  {path: 'login', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
