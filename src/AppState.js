import { observable } from 'mobx';

import CustomersStore from './stores/CustomersStore';
import AdminContextStore from './stores/AdminContextStore';
import CustomerServerRequests from './server/CustomerServerRequests';

export default class AppState {
  @observable customersStore = new CustomersStore(new CustomerServerRequests());
  @observable adminContext = new AdminContextStore();

  constructor() {

  }
}

