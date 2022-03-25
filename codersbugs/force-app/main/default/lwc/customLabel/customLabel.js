import { LightningElement,track } from 'lwc';
import Demo_Label_1 from '@salesforce/label/c.Demo_Label_1';

export default class CustomLabel extends LightningElement {
    @track customLabelValue = Demo_Label_1;
}