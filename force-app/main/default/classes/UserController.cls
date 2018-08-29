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

}