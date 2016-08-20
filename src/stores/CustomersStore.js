import { observable, action, useStrict } from 'mobx';
import { observer } from 'mobx-react';
useStrict(true);


@observer
export default class CustomersStore {
    serverRequester;
    @observable customers = [];
    @observable isLoading = true;

    // filters, search terms? or put that in search store and pass CustomersStore to SearchStore?

    constructor(serverRequester) {
        this.serverRequester = serverRequester;
        this.loadCustomers();
    }

    loadCustomers() {
        this.isLoading = true;
        this.serverRequester.getCustomers().then(fetchedCustomers => {
            this.customers.forEach(json => this.updateCustomersFromServer(json));
            this.isLoading = false;
        });
    }

    updateCustomersFromServer(json) {
        let customer = this.customers.find(customer => customer.id === json.id);
        if(!customer) {
            customer = new Customer(this, json.id);
            this.customers.addCustomer(customer);
        }
        if(json.isDeleted){
            this.deleteCustomer(customer);
        } else {
            customer.updateFromJson(json);
        }
    }

    @action addCustomer(newCustomer){
        this.customers.push(newCustomer);
    }

    @action deleteCustomer(customer) {
        this.customers.pop(customer);
    }
}