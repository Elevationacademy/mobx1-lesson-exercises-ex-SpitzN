import { observable } from "mobx";

export class Item {
  @observable name;
  @observable completed = false;
  @observable location = "super sell";
  constructor(name) {
    this.name = name;
  }
}
