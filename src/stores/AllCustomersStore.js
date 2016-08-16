import { observable, observer } from 'mobx';

use('strict');

@observer
export default class AllCustomersStore {
    @observable customers;

    constructor() {

    }

    @action addCustomer(newCustomer){
        this.customers.push(newCustomer);
    }

    @action deleteCustomer(customer) {
        this.customers.pop(customer);
    }
}