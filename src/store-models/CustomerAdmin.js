import { observable, observer } from 'mobx';

use('strict');

@observer
export default class CustomerAdmin {
    @observable id;
    @observable customerID;
    @observable email;
    @observable password;
    @observable role;

    constructor() {

    }

    @computed get asJson() {
        return {
            id: this.id,
            customerID: this.customerID,
            email: this.email,
            password: this.password,
            role: this.role
        }
    }

    updateFromJson(json){
        this.id = json.id;
        this.customerID = json.customerID;
        this.email = json.email;
        this.password = json.password;
        this.role = json.role;
    }
}