import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksListComponent} from "./components/books-list/books-list.component";
import {BorrowersListComponent} from "./components/borrowers-list/borrowers-list.component";
import {NewBookComponent} from "./components/new-book/new-book.component";
import {NewBorrowerComponent} from "./components/new-borrower/new-borrower.component";
import {BorrowerHistoryListComponent} from "./components/borrower-history-list/borrower-history-list.component";
import {NewBorrowComponent} from "./components/new-borrow/new-borrow.component";
import {CategoriesListComponent} from "./components/categories-list/categories-list.component";
import {NewCategoryComponent} from "./components/new-category/new-category.component";
import {ReturnBookComponent} from "./components/return-book/return-book.component";
import {AvailableBooksListComponent} from "./components/available-books-list/available-books-list.component";
import {BooksListByCategoryComponent} from "./components/books-list-by-category/books-list-by-category.component";
import {AuthorsListComponent} from "./components/authors-list/authors-list.component";
import {NewAuthorComponent} from "./components/new-author/new-author.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
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
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
