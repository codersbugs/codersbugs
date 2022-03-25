public with sharing class sendDataToApex {
  
    @AuraEnabled(cacheable=true)
public static List<Account> getAccounts(String strAccountName) {
   System.debug(' String ' + strAccountName);
   return null;
 }

}