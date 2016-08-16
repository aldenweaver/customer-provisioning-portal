import { observable, observer } from 'mobx';

use('strict');

@observer
export default class AdminContextStore {
    @observable email;
    @observable password;
    @observable role; // TODO: roles constants

    constructor() {

    }
}