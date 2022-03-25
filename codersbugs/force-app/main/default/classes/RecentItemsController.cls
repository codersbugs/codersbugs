public with sharing class RecentItemsController {

    @AuraEnabled
    public static  List<ToDo__c> getRecentRecords(String doDoName , Integer numberOfRecords){
        Integer NumberOfRecordToDisplay = numberOfRecords;
        String query = 'select Id, Name ,Phone From '+doDoName+' ORDER BY  createdDate DESC LIMIT '+ NumberOfRecordToDisplay;
        return Database.query(query);
    }
}


