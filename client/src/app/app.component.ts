import {Component, ViewEncapsulation} from '@angular/core';
import {Http} from "@angular/http";
import {ListItem} from "./app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
  items: ListItem[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('assets/data/items.json')
      .map(response => response.json())
      .subscribe(data => this.items = data);
  }
}
