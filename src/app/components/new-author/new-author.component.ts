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

  constructor(private authorService: AuthorService, private router: Router) {
  }

  saveAuthor(): void {
    this.authorService
      .createAuthor(this.form)
      .subscribe(response => {
        this.router
          .navigate(['/authors'])
          .then(r => console.log('Author created'));
      })
  }

  ngOnInit(): void {
  }

}
