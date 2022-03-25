import { LightningElement } from 'lwc';
import {api , track , wire } from 'lwc'
import getPicklistTypeFields from '@salesforce/apex/GetPicklistTypeFields.getPicklistTypeFields'
import getAllObjectList from '@salesforce/apex/CommonMethods.getAllObjectList';
import getPickListvaluesByFieldName from '@salesforce/apex/GetPicklistTypeFields.getPickListvaluesByFieldName';

export default class GetPicklist extends LightningElement {
    @track lstOfPicklistFields = [];
    @track objectList = [];
    @track mapofPickListValues = [];
    @track objectFieldOptionsList = [];
    @track picklistFieldsLabel = 'Picklist Fields' 
    fieldSelectedToGetPicklistTypeField = '';
    objectName = '';   
    connectedCallback() { 
        getAllObjectList()
        .then((result) => {
            if (result) {
                this.objectList = [];
                for (let key in result ) {
                    this.objectList.push({ label: key, value: key });
                }
            } else {
                console.log('Error in getting objects ')
            }
        }).catch((error) => {
            console.log('Catch Error in getting objects   ')
        });
    }
    onObjectChange(event) { 
        this.objectName = event.detail.value;
        this.picklistFieldsLabel = '';
        this.picklistFieldsLabel = this.objectName + ' Picklist Fields';
        this.handleGetPicklistFields();
       
    }
    handleGetPicklistFields(){
		getPicklistTypeFields({ strObjectName: this.objectName })
		.then(result => {
			this.lstOfPicklistFields = [];
            for (let key in result) {
                this.lstOfPicklistFields.push({ label: key, value: key });
            }
		})
		.catch(error => {
			console.log('Error in getting picklist fields');
		})
	} 
    getPicklistFieldsOptions(event) { 
        console.log('event.detail.value ',event.detail.value)
        console.log('event.detail.value ',event.detail.name)
        this.fieldSelectedToGetPicklistTypeField = event.detail.value;
        this.getPicklistValuesForSelectedPicklistField();
    }
    async getPicklistValuesForSelectedPicklistField() {
        console.log('objectName ',this.objectName)
        console.log('fieldSelectedToGetPicklistTypeField ',this.fieldSelectedToGetPicklistTypeField)
        await getPickListvaluesByFieldName({ objectName: this.objectName, pickListFieldName: this.fieldSelectedToGetPicklistTypeField })
        .then((result) => {
          if (result) {
              this.objectFieldOptionsList = [];
            for (let key in result) {
                this.objectFieldOptionsList.push({ label: key, value: result[key] });
            }
            //   this.mapofPickListValues = [];
            // this.mapofPickListValues = result.data;
          } 
        //  this.objectFieldOptionsList = [];
    
        //   for (let key in this.mapofPickListValues) {
        //       console.log('label: key ', key)
        //     this.objectFieldOptionsList.push({ label: key, value: this.mapofPickListValues[key]});
        //   }
          console.log('objectFieldOptionsList',this.objectFieldOptionsList)
        }).catch((error) => {
          console.log('Error in getting pickist values')
        })
    }
}