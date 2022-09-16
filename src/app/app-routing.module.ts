import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksListComponent} from "./books-list/books-list.component";
import {BorrowersListComponent} from "./borrowers-list/borrowers-list.component";
import {NewBookComponent} from "./new-book/new-book.component";
import {NewBorrowerComponent} from "./new-borrower/new-borrower.component";
import {BorrowerHistoryListComponent} from "./borrower-history-list/borrower-history-list.component";
import {NewBorrowComponent} from "./new-borrow/new-borrow.component";
import {CategoriesListComponent} from "./categories-list/categories-list.component";
import {NewCategoryComponent} from "./new-category/new-category.component";
import {ReturnBookComponent} from "./return-book/return-book.component";
import {AvailableBooksListComponent} from "./available-books-list/available-books-list.component";
import {BooksListByCategoryComponent} from "./books-list-by-category/books-list-by-category.component";
import {AuthorsListComponent} from "./authors-list/authors-list.component";
import {NewAuthorComponent} from "./new-author/new-author.component";

const routes: Routes = [
  {path: 'books', component: BooksListComponent},
  {path: 'new-book', component: NewBookComponent},
  {path: 'books-available', component: AvailableBooksListComponent},
  {path: 'books-by-category', component: BooksListByCategoryComponent},
  {path: 'return-book', component: ReturnBookComponent},
  {path: 'borrowers', component: BorrowersListComponent},
  {path: 'borrowers/:id/history', component: BorrowerHistoryListComponent},
  {path: 'new-borrower', component: NewBorrowerComponent},
  {path: 'new-borrow', component: NewBorrowComponent},
  {path: 'categories', component: CategoriesListComponent},
  {path: 'new-category', component: NewCategoryComponent},
  {path: 'authors', component: AuthorsListComponent},
  {path: 'new-author', component: NewAuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
