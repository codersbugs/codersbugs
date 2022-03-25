import { LightningElement , track } from 'lwc';
export default class ParentC extends LightningElement {
    @track valueFromChild='';
    handleValuesFromChild(event) {
        this.valueFromChild = event.detail.value;
    }
}