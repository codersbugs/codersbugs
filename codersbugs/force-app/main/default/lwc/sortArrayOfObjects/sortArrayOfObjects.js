import { LightningElement ,track} from 'lwc';

export default class SortArrayOfObjects extends LightningElement {

    @track arrayOfObjectsBeforeSoft =[
        {"value":"J","label":"J"},{"value":"A","label":"A"},
        {"value":"D","label":"D"},{"value":"P","label":"P"},
        {"value":"B","label":"B"},{"value":"C","label":"C"},
    ];

    @track arrayOfObjectsAfterSort = this.arrayOfObjectsBeforeSoft.sort((a,b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0));
    
    connectedCallback(){
        this.arrayOfObjectsBeforeSoft = JSON.stringify(this.arrayOfObjectsBeforeSoft);
        this.arrayOfObjectsAfterSort = JSON.stringify(this.arrayOfObjectsAfterSort);
    }
}