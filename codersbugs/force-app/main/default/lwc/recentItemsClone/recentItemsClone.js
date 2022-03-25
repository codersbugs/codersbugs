import { LightningElement, api} from 'lwc';

export default class RecentItemsClone extends LightningElement {
    @api ObjectName;
    @api NumberOfRecordToDisplay;
    @api LabelOfRecentRecords;

    renderedCallback() { 
        console.log(' ObjectName ', this.ObjectName);
        console.log(' LabelOfRecentRecords ', this.LabelOfRecentRecords);
        console.log(' NumberOfRecordToDisplay ', this.NumberOfRecordToDisplay);
    }
}