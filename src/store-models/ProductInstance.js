import { observable, observer, useStrict } from 'mobx';
useStrict(true);


@observer
export default class ProductInstance {
    @observable id;
    @observable productType; // TODO: product types contants, map to product store models
    @observable customerID;
    @observable accessCode;
    @observable requiredInfo;
    @observable userIDs;

    constructor() {

    }

    @computed get asJson() {
        return {
            id: this.id,
            productType: this.productType,
            customerID: this.customerID,
            accessCode: this.accessCode,
            requiredInfo: this.requiredInfo,
            userIDs: this.userIDs
        }
    }

    updateFromJson(json){
        this.id = json.id;
        this.productType = json.productType;
        this.customerID = json.customerID;
        this.accessCode = json.accessCode;
        this.requiredInfo = json.requiredInfo;
        this.userIDs = json.userIDs;
    }
}