import { observable, observer } from 'mobx';

use('strict');

@observer
export default class UserStoreModel {
    @observable userID;
    @observable customerID;
    @observable email;
    @observable password;
    @observable productIDs;

    constructor() {

    }
}