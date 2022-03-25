import { LightningElement,api } from 'lwc';

export default class LwcToFlow extends LightningElement {
    @api Value ='hello';
    getValue(event) {
        this.Value = event.target.value ;
    }

}