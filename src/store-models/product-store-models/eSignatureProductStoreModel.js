import { observable, observer } from 'mobx';

import ProductStoreModel from '../ProductStoreModel';

use('strict');

@observer
export default class eSignatureProductStoreModel extends ProductStoreModel {
    constructor() {
        super();
    }

}