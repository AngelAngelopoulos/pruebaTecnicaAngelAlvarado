import {Injectable} from '@angular/core';
import {Menu} from "../models/menu";
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

/*
* Service that helps to create getMenu function that returns the Menus structure from the API endpoint
*/
export class MenuService {

  /*
  * API endpoint URI
  */
  private url = 'https://proyectatufuturo.app:7444/menu'

  private menu: Menu[] | null;

  constructor(private http: HttpClient) {
    this.menu = null;
  }

  /*
  * Observable function that returns an Observable object with type Menu
  */
  public getMenu(): Observable<Menu> {
    return this.http.get<Menu>(this.url);
  }
}
