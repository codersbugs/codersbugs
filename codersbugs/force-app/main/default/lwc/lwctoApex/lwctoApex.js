import { LightningElement } from 'lwc';
import getInputFromLwc from '@salesforce/apex/CommonMethods.getInputFromLwc'


export default class GetPicklist extends LightningElement {
    textBoxValue = '';
    onTextChage(event) { 
        this.textBoxValue = event.detail.value;
    }
    callApexMethod(){
        console.log('call');
		getInputFromLwc({ input: this.textBoxValue })
	} 
    
}