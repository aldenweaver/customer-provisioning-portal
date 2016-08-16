import { observable, observer } from 'mobx';

use('strict');

@observer
export default class CustomerAdmin {
    @observable adminID;
    @observable customerID;
    @observable email;
    @observable password;
    @observable role;

    constructor() {

    }
}