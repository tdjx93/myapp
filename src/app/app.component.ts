import {Component} from '@angular/core';
import {EventService} from "./services/event.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  events: any;

  constructor(private service: EventService) {
  }

  ngOnInit() {
    this.service.getEvents()
      .subscribe(response => {
        this.events = response;
      });
  }
}

