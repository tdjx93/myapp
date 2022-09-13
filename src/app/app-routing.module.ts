import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksListComponent} from "./books-list/books-list.component";
import {BorrowersListComponent} from "./borrowers-list/borrowers-list.component";

const routes: Routes = [
  { path: 'books', component: BooksListComponent },
  { path: 'borrowers', component: BorrowersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
