import { observable, observer } from 'mobx';

use('strict');

@observer
export default class CustomerAdminStoreModel {
    @observable adminID;
    @observable customerID;
    @observable email;
    @observable password;
    @observable role;

    constructor() {

    }
}