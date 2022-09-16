import { Component, OnInit } from '@angular/core';
import {AuthorService} from "../services/author.service";

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {
  authors: any;

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAuthors()
      .subscribe(response => this.authors = response)
  }

}
