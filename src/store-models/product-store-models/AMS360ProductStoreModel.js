import { observable, observer } from 'mobx';

import ProductStoreModel from '../ProductStoreModel';

use('strict');

@observer
export default class AMS360ProductStoreModel extends ProductStoreModel {
    constructor() {
        super();
    }
}