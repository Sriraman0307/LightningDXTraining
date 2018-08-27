Public class createProfileController {
    Public string firstName{get;set;}
    Public string lastName{get;set;}
    Public string email{get;set;}
    Public Pagereference save(){
        Contact objContact = new Contact(FirstName = firstName, LastName = lastName, Email = email);
       	Insert objContact;
        Pagereference p = new Pagereference('/apex/createProfile');
		p.setredirect(true);
		return p;
    }
}
