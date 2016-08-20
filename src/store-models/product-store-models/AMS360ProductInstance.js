import { observable, observer, useStrict } from 'mobx';
useStrict(true);

import ProductStoreModel from '../ProductInstance';

@observer
export default class AMS360ProductInstance extends ProductStoreModel {
    constructor() {
        super();
    }
}