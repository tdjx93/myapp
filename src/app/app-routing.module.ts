import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksListComponent} from "./books-list/books-list.component";
import {BorrowersListComponent} from "./borrowers-list/borrowers-list.component";
import {NewBookComponent} from "./new-book/new-book.component";
import {NewBorrowerComponent} from "./new-borrower/new-borrower.component";

const routes: Routes = [
  { path: 'books', component: BooksListComponent },
  { path: 'borrowers', component: BorrowersListComponent },
  { path: 'new-book', component: NewBookComponent },
  { path: 'new-borrower', component: NewBorrowerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
