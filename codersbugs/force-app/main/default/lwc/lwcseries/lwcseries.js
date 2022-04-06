import { LightningElement , track , wire ,api} from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Image from '@salesforce/resourceUrl/Image';

export default class Lwcseries extends LightningElement {
    @track showButton = false;
    @api Name = '';
    lstFields = [];
    newObjectName = '';
    objectName = '';
    @track ImageToShow = Image;
    getName(event) {
        this.showButton = true
        this.objectName = event.target.value;
    }
    connectedCallback() { 
        console.log('Image ', Image);
        this.showTosat('Success','connectedCallback is call','success');
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
            this.showTosat('Info','fields loaded','info');
        }
        else if (error) { 
            this.showTosat('Error','While while getting fields ','error');
        }
    }
    showTosat (title, message, variant) {
        this.dispatchEvent(new ShowToastEvent ({ title: title, message: message, variant: variant }));
    }
}