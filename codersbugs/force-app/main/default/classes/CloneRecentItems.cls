global with sharing class CloneRecentItems extends VisualEditor.DynamicPickList  {
    VisualEditor.DesignTimePageContext context;
    global override VisualEditor.DataRow getDefaultValue() {
        return  new CloneRecentItems().getValues().get(0);
    }
    global override VisualEditor.DynamicPickListRows getValues() {
        try {
            VisualEditor.DynamicPickListRows  lstSObject = new VisualEditor.DynamicPickListRows();
            for(Schema.SObjectType objTyp : Schema.getGlobalDescribe().Values())
            {
                String name = objTyp.getDescribe().getLocalName();
                String label = objTyp.getDescribe().getLabel();
                lstSObject.addRow(new VisualEditor.DataRow(name,label));
            }
            System.debug('lstSObject '+lstSObject);
            return lstSObject;
        }
        catch ( Exception ex) {
            system.debug( 'Exception - ' + ex.getMessage() + ' at line ' + ex.getLineNumber() + ' stack trace ' + ex.getStackTraceString());
            return null;
        }    
    }
    
}