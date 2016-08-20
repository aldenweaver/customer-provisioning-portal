import { observable, observer, useStrict } from 'mobx';
useStrict(true);


@observer
export default class Customer {
    @observable id;
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


    @computed get asJson() {
        return {
            id: this.id,
            customerName: this.customerName,
            addressLine2: this.addressLine2,
            addressLine1: this.addressLine1,
            city: this.city,
            state: this.state,
            zip: this.zip,
            website: this.website,
            isEnabled: this.isEnabled,
            vertaforeIDs: this.vertaforeIDs,
            users: this.users,
            admins: this.admins,
            productInstances: this.productInstances
        };
    }

    // Update the customer with new info from a json object
    updateFromJson(json){
        this.id = json.id;
        this.customerName = json.customerName;
        this.addressLine2 = json.addressLine2;
        this.addressLine1 = json.addressLine1;
        this.city = json.city;
        this.state = json.state;
        this.zip = json.zip;
        this.website = json.website;
        this.isEnabled = json.isEnabled;
        this.vertaforeIDs = json.vertaforeIDs;
        this.users = json.users;
        this.admins = json.admins;
        this.productInstances = json.productInstance;
    }
}