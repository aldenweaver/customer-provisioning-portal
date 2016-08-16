import { observable } from 'mobx';

export default class AppState {
  @observable customersStore;
  @observable adminContext;

  constructor() {

  }
}

