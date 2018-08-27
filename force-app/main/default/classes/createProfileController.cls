Public class createProfileController {
    Public string firstName{get;set;}
    Public string lastName{get;set;}
    Public string email{get;set;}
    Public void save(){
        Contact objContact = new Contact(FirstName = firstName, LastName = lastName, Email = email);
       	Insert objContact;
    }
}
