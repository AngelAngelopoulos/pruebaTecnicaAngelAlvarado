
/*
* Menu Interface, this is used to generate a class with these types
*/
interface IMenu {
  name: string | null;
  icon: string | null;
  badge: string | null;
  menu: IMenu[] | null;
}

/*
* Menu Class, this helps to create objects with the Interface implementation,
* the structure is extracted from json obtained as result from https://proyectatufuturo.app:7444/menu
*/
export class Menu implements IMenu{
  public name: string | null;
  public icon: string | null;
  public badge: string | null;
  public menu: Menu[] | null;

  constructor() {
    this.name = null;
    this.icon = null;
    this.badge = null;
    this.menu = null;
  }
}

