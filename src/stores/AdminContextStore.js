import { observable, action, useStrict } from 'mobx';
import { observer } from 'mobx-react';
useStrict(true);

@observer
export default class AdminContextStore {
    @observable email = "";
    @observable password = "";
    @observable role = ""; // TODO: roles constants

    constructor() {
        // loadAdminContext()
    }
}