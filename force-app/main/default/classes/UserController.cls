public with sharing class UserController {
    @AuraEnabled
    public static string getUserName(){

        return UserInfo.getLastName();
    } 

    @AuraEnabled
    public static contact getUserLastName(String MobilePhone){
        system.debug('@@@MobilePhone : ' + MobilePhone);
		contact objContact = [Select id, LastName,MobilePhone from Contact where MobilePhone =:MobilePhone];
        return objContact;
    } 
    @AuraEnabled
    public static List<ToDo_Task__c> getToDos(){
        system.debug('@@@Inside getToDos');
		List<ToDo_Task__c> lstToDos = [Select id, Name, Task_Detail__c from ToDo_Task__c];
        return lstToDos;
    }
    @AuraEnabled
    public static List<ToDo_Task__c> insertRecord(ToDo_Task__c objRecord){
        system.debug('@@@Inside insertRecord');
        List<ToDo_Task__c> lstToDos = new List<ToDo_Task__c>();
        if(objRecord != null){
            insert objRecord;
            lstToDos = [Select id, Name,createdDate, Task_Detail__c from ToDo_Task__c Order By createdDate];
        }
        return lstToDos;
    }
}