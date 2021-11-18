import {Component, Input, OnInit} from '@angular/core';
import {Menu} from "../../models/menu";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  /*
  * Menu object to be passed to the component
  */
  @Input() menu: Menu[] | null;

  constructor() {
    this.menu = null;
  }

  ngOnInit(): void {
  }
}
