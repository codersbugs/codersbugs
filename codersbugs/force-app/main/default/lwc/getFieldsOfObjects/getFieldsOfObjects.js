import { LightningElement,api,track,wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class GetFieldsOfObjects extends LightningElement {
    @track objectNameToGetRecordTypes = 'Contact';
    @track lstRecordTypes =[];
    @wire(getObjectInfo, { objectApiName: '$objectNameToGetRecordTypes' })
   
    getObjectInfo({ error, data }) {
        if (data) {
            this.lstRecordTypes = [];
            for (let key in data.recordTypeInfos) {
                this.lstRecordTypes.push({ value: key, label:data.recordTypeInfos[key].name});
            }
            console.log('record types ', this.lstRecordTypes)
        }
        else if (error) {
            console.log('Error while get record types');
            this.lstRecordTypes = [];
        }
    }
}