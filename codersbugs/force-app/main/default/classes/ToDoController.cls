public with sharing class ToDoController {
    public ToDoController() {

    }

    @AuraEnabled
    public static  List<ToDo__c> saveToDo(String doDoName , String record){
        try {
            ToDo__c myToDo = new ToDo__c();
            String shortName = doDoName.substring(0,5);
            myToDo.Name = shortName;
            myToDo.ToDoRecord__c = record;
            Database.insert(myToDo);
            System.debug([SELECT Id, ToDoRecord__c, Name FROM ToDo__c]);
            return [SELECT Id, ToDoRecord__c, Name FROM ToDo__c ORDER BY  createdDate DESC];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static List<ToDo__c> getToDos() {
    return [SELECT Id, ToDoRecord__c, Name FROM ToDo__c ORDER BY  createdDate DESC];
  }
  @AuraEnabled
    public static  List<ToDo__c> deleteTodo(String toDoId){
        try {
            List<ToDo__c> toDoItem = [SELECT Id from ToDo__c WHERE Id =: toDoId];
            delete toDoItem;

            System.debug([SELECT Id, ToDoRecord__c, Name FROM ToDo__c]);
            return [SELECT Id, ToDoRecord__c, Name FROM ToDo__c ORDER BY  createdDate DESC];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}