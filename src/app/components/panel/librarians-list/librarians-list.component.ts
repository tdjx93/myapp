import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-librarians-list',
  templateUrl: './librarians-list.component.html',
  styleUrls: ['./librarians-list.component.scss']
})
export class LibrariansListComponent implements OnInit {
librarians: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLibrarians()
      .subscribe(response => this.librarians = response)
  }

}
