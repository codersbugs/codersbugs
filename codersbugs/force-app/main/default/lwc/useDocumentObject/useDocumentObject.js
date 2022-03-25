import { LightningElement,wire,track } from 'lwc';
import getImages from "@salesforce/apex/GetDocuments.getImages";

export default class UseDocumentObject extends LightningElement {
    @track allRecordsFromDocutemtObject = [];
    sfdcBaseURL
    @track imagesArray= [];
    @wire(getImages)
    documentRecords({ data, error })
    {
        this.sfdcBaseURL = window.location.origin;
        if(data)
        {
            this.allRecordsFromDocutemtObject = data;
            let documentRecords = this.allRecordsFromDocutemtObject;
            documentRecords.forEach(element => {
                    this.imagesArray.push({ url: this.sfdcBaseURL+'/servlet/servlet.FileDownload?file='+ element.Id})
            });
        }
        else if (error){
            console.log('error in getting images===>' +JSON.stringify(error));
        }
    }
}