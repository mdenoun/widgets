import { Component, Input, OnChanges } from '@angular/core';

import { ListItem } from '../app';

@Component({
  selector: 'table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.scss']
})
export class TableListComponent implements OnChanges {

  @Input()
  items: ListItem[];
  scrollItems: ListItem[];
  indices: any;

  filteredList: ListItem[];

  setToFullList() {
    this.filteredList = (this.items || []).slice();
  }

  ngOnChanges() {
    this.setToFullList();
  }

}
