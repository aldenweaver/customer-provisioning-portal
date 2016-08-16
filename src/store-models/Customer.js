import { observable, observer } from 'mobx';

use('strict');

@observer
export default class CustomerStoreModel {
    @observable customerID;
    @observable customerName;
    @observable addressLine1;
    @observable addressLine2;
    @observable city;
    @observable state;
    @observable zip;
    @observable website;
    @observable isEnabled;

    @observable vertaforeIDs; // Array that holds the Vertafore IDs for this customer
    @observable users; // Array that holds the user store models of the users belonging to this customer
    @observable admins; // Array that holds the customer admin store models of the admins belonging to this customer
    @observable productInstances; // Array that holds the product store models of the product instances belonging to this customer


    constructor() {

    }
}