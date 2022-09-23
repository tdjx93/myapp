import {Component, OnInit} from '@angular/core';
import {ReaderService} from "../../../services/reader.service";

@Component({
  selector: 'app-borrowers-list',
  templateUrl: './readers-list.component.html',
  styleUrls: ['./readers-list.component.scss']
})
export class ReadersListComponent implements OnInit {
  readers: any;

  constructor(private borrowerService: ReaderService) {
  }

  ngOnInit(): void {
    this.borrowerService.getReaders()
      .subscribe(response => this.readers = response)
  }

}
