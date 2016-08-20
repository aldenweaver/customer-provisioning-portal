// Performs calls to server related to customer
import { observable, observer, useStrict } from 'mobx';
useStrict(true);


export default class CustomerServerRequests {
    getCustomers() {
        return [{customer: true}];
    }
}