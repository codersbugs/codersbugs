public with sharing class GetDocuments {
    @AuraEnabled(cacheable=true)
    public static List<Document> getImages()
    {
        List<Document> lstImages = new List<Document>();
        for(Document images : [SELECT Id, body FROM Document WHERE Folder.Name = 'Images'])
        {
            lstImages.add(images);
        }
        return lstImages;
    }
}