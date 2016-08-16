import { observable, observer } from 'mobx';

use('strict');

@observer
export default class ProductStoreModel {
    @observable instanceID;
    @observable productType; // TODO: product types contants, map to product store models
    @observable customerID;
    @observable accessCode;
    @observable requiredInfo;
    @observable userIDs;

    constructor() {

    }
}