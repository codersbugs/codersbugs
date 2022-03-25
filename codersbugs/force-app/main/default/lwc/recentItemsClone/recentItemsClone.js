import { LightningElement, track , api} from 'lwc';
import getRecentRecords from "@salesforce/apex/RecentItemsController.getRecentRecords";
const columns = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name', type: 'Name' },
    { label: 'Phone', fieldName: 'Phone', type: 'Phone' },

];
export default class RecentItemsClone extends LightningElement {
    @api ObjectName;
    @api NumberOfRecordToDisplay = 5;
    @api LabelOfRecentRecords = 'Recent records';
    count = 0;
    data = [];
    columns = columns;

    renderedCallback() { 
        if(this.count<3) { 

            getRecentRecords({ doDoName: this.ObjectName , numberOfRecords: this.NumberOfRecordToDisplay})
            .then((data) => {
                this.data = data;
                console.log('getting records');
            })
            .catch((error) => { 
                console.log('Error in record fetch')
            });
            this.count++;
        }  
    }
}