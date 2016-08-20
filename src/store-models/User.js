import { observable, observer, useStrict } from 'mobx';
useStrict(true);


@observer
export default class User {
    @observable id;
    @observable customerID;
    @observable email;
    @observable password;
    @observable productIDs;

    constructor() {

    }

    @computed get asJson() {
        return {
            id: this.id,
            customerID: this.customerID,
            email: this.email,
            password: this.password,
            productIDs: this.productIDs
        }
    }

    updateFromJson(json){
        this.id = json.id;
        this.customerID = json.customerID;
        this.email = json.email;
        this.password = json.password;
        this.productIDs = json.productIDs;
    }
}