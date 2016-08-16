import { observable, observer } from 'mobx';

import ProductStoreModel from '../ProductInstance';

use('strict');

@observer
export default class AMS360ProductInstance extends ProductStoreModel {
    constructor() {
        super();
    }
}