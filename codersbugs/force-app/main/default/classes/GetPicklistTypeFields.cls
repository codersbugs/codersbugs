public with sharing class GetPicklistTypeFields {
    
    @AuraEnabled(cacheable=true)
    public static Map<String,String> getPicklistTypeFields(String strObjectName) {
        Map<String, Schema.SObjectType> detail = Schema.getGlobalDescribe();
        Map<String,String> mapOfPicklistTypeFields = new  Map<String,String>();
        for(Schema.SObjectField fields :detail.get(strObjectName).getDescribe().fields.getMap().Values()) {
            If(fields.getDescribe().getType() == Schema.DisplayType.PICKLIST) { 
                mapOfPicklistTypeFields.put(fields.getDescribe().getName() , fields.getDescribe().getName());
            }
        }
        return mapOfPicklistTypeFields;
    }
    @AuraEnabled(cacheable = true)
    public static Map<String,String> getPickListvaluesByFieldName(string objectName, string pickListFieldName){
        try {
            System.debug('objectName '+ objectName);
            System.debug('pickListFieldName '+ pickListFieldName);
            Map<String,String> pickListFields = new  Map<String,String>(); 
            Map<String, Schema.SObjectField> mapFields = Schema.getGlobalDescribe().get(objectName).getDescribe().fields.getMap();
            Schema.DescribeFieldResult pickFieldResult = mapFields.get(pickListFieldName).getDescribe();   
            List<Schema.PicklistEntry> pickListFieldsEntries = pickFieldResult.getPicklistValues();
                for( Schema.PicklistEntry pickListFieldsEntry : pickListFieldsEntries)
                {
                    pickListFields.put(pickListFieldsEntry.getLabel(),pickListFieldsEntry.getValue());
                }       
                System.debug('pickListFields '+ pickListFields);
            return pickListFields;
        } catch (Exception e) {
            return null;
        }
    }

  
}