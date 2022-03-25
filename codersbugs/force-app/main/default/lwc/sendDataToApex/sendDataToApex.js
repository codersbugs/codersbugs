import { LightningElement ,api,track,wire} from 'lwc';
import getAccounts from '@salesforce/apex/sendDataToApex.getAccounts'

export default class SendDataToApex extends LightningElement {
    @track searchKey;
    @track count =0;
  @wire (getAccounts,{strAccountName: '$searchKey'}) accounts;
  handleKeyChange(){
      
    this.searchKey = 'Sagar' + this.count;
    this.count++;
  }
}