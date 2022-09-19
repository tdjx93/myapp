import {Component, OnInit} from '@angular/core';
import {AuthorService} from "../../services/author.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.scss']
})
export class NewAuthorComponent implements OnInit {
  form = {
    fullName: ''
  };
  errors: any

  constructor(private authorService: AuthorService,
              private router: Router) {
  }

  saveAuthor(): void {
    this.authorService
      .createAuthor(this.form)
      .subscribe(
        result => {
          this.router
            .navigate(['/authors'])
            .then(r => console.log('Author created'));
        },
        response => {
          this.errors = {};
          for (const error of response.error) {
            this.errors[error.field] = error.message;
          }
        }
      )
  }

  ngOnInit(): void {
  }

}
