import { observable, observer, useStrict } from 'mobx';
useStrict(true);

import ProductStoreModel from '../ProductInstance';


@observer
export default class eSignatureProductInstance extends ProductStoreModel {
    constructor() {
        super();
    }

}