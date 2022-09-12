import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  users = [
    {id: 1, name: "Dawid"},
    {id: 2, name: "Jakub"},
    {id: 3, name: "Mateusz"}
  ];
  events = [
    {id: 1, name: "event 1", topic: "topic 1"},
    {id: 2, name: "event 2", topic: "topic 2"},
    {id: 3, name: "event 3", topic: "topic 3"},
    {id: 4, name: "event 4", topic: "topic 4"}
  ];
}

