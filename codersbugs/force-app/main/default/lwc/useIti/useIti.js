import { LightningElement,api,track } from 'lwc';
import intlTellinputjs from '@salesforce/resourceUrl/intlTellinputjs';
import utils from '@salesforce/resourceUrl/utils';
import intlTellinputcss from '@salesforce/resourceUrl/intlTellinputcss';
import democss from '@salesforce/resourceUrl/democss';
import flags from '@salesforce/resourceUrl/flags';
import { loadScript,loadStyle} from  'lightning/platformResourceLoader';

export default class UseITI extends LightningElement {
    @api CountryName = '';
    @track inputElem ;
    @track inputElem ;
    @track iti ;
    @track placeHolermasked = '' ;
    onChange() {
        this.placeHolermasked = this.template.querySelector("[data-id=country]").placeholder;
        console.log('place holdr masked ', this.placeHolermasked)
    }
    connectedCallback() {
        loadStyle(this, democss)
         .then(() => {
             
        });
        loadStyle(this, intlTellinputcss)
         .then(() => {
           
        });
        loadScript(this, utils)
         .then(() => {
           
        });
         loadScript(this, intlTellinputjs)
         .then(() => {
            this.inputElem = this.template.querySelector("[data-id=country]")
            window.intlTelInput(this.inputElem, {
            utilsScript: utils,
            initialCountry: "IN",
            preferredCountries: ['IN','US'],
            })  
        })
    }
    
}