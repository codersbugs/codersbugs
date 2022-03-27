import { LightningElement , track , wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class Lwcseries extends LightningElement {
    @track showButton = false;
    lstFields = [];
    newObjectName = '';
    objectName = '';
    getName(event) {
        this.showButton = true
        this.objectName = event.target.value;
    }
    connectedCallback() { 
        console.log('connectedCallback is call');
    }
    changeObjectName() {
        this.newObjectName = this.objectName;
    }
    @wire(getObjectInfo, { objectApiName: '$newObjectName' })
    getObjectInfo({ error, data }) {
        this.lstFields = [];
        if(data) { 
            for (let key in data.fields) {
                this.lstFields.push({ value: key, label: data.fields[key].label });
            }
            console.log(' lstFields ', JSON.stringify(this.lstFields));
        }
        else if (error) { 
            console.log('error  lstFields ')
        }
    }
}