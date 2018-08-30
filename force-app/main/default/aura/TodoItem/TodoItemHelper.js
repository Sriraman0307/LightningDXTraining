({
    checkIfAvailable : function(component, event) {
        var todos = component.get("v.todos");
        console.log("todos : " + todos);
        var boolAvailable = "false";
        var valueEnteredInText = component.find("ItemEntered").get("v.value");
        console.log("valueEnteredInText : " + valueEnteredInText);
        for(var i in todos){
           // console.log("Inside For : " + todos[i].Task_Detail__c);
            if(todos[i].Task_Detail__c == valueEnteredInText){
                console.log("InsideHelper");
                boolAvailable = "true";
            }
        }
        component.set("v.boolAvailable", boolAvailable); 
    }
}) 
