import {Component, OnInit} from '@angular/core';
import {AuthorService} from "../services/author.service";

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.scss']
})
export class NewAuthorComponent implements OnInit {
  form = {
    fullName: ''
  };

  constructor(private authorService: AuthorService) {
  }

  saveAuthor(): void {
    this.authorService
      .createAuthor(this.form)
      .subscribe(response => console.log('Author created'))
  }

  ngOnInit(): void {
  }

}
