import { LightningElement, track} from 'lwc';

export default class MaskedPhoneNumber extends LightningElement {
    indiaFormat = '12345 67890';
    USFormat = '(000) 123-4567'
    placeHolder = this.indiaFormat
    @track formatLen = this.placeHolder.length
    @track phoneNumberEntered = '';

    onPhoneChange(event) {
        let getIndexOfSpecialChar = [];
        let getactualSpecialChar = [];

         for (let i = 0; i < this.placeHolder.length; i++) {
             if(this.placeHolder[i] == ' ' || this.placeHolder[i] == '(' || this.placeHolder[i] == ')' 
             || this.placeHolder[i] == '-' ) {
                getIndexOfSpecialChar.push(i); 
                getactualSpecialChar.push(this.placeHolder[i]); 
             }
           }
           []
       let len = event.target.value.length;
       let  backspace= event.keyCode;
       if(backspace == 8 ) {
         len = len-1;
        }else {
         len = event.target.value.length
        }
        let eventTargetValue = event.target.value
       for(let i = 0;i < this.placeHolder.length; i++){
         if(len == getIndexOfSpecialChar[i]) {
             this.phoneNumberEntered = eventTargetValue + getactualSpecialChar[i];
             if(this.phoneNumberEntered.length == getIndexOfSpecialChar[i+1]) {
                 this.phoneNumberEntered = this.phoneNumberEntered + getactualSpecialChar[i+1];
             }
         }
       }
     }

}