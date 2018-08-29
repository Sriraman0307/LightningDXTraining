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
}