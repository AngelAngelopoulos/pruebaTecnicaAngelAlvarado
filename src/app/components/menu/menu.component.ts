import { Component, OnInit } from '@angular/core';
import {Menu} from "../../models/menu";
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Menu[] | null;

  constructor(private serviceMenu: MenuService) {
    this.menu = null
  }

  ngOnInit(): void {
    this.serviceMenu.getMenu()
      .subscribe(data => {
        this.menu = data.menu;
      })
  }
}
