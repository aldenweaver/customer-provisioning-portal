import { observable, observer } from 'mobx';

import ProductStoreModel from '../ProductInstance';

use('strict');

@observer
export default class AMS360ProductStoreModel extends ProductStoreModel {
    constructor() {
        super();
    }
}