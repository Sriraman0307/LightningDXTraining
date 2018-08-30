({
    checkData : function(component, event, helper) {
        if(event.getParam('keyCode') == 13){
           helper.checkIfAvailable(component, event);
           var boolValue = component.get("v.boolAvailable");
           console.log(boolValue);
           if(boolValue == "true"){
            var newEvent = component.getEvent('eventToBeCalled');
            var strResult = "Value already available"
            console.log("Inside result : " + strResult);
            newEvent.setParams({"result" : strResult});
            newEvent.fire();
           // alert("Value already available");
           }
           else{
            var objAssignment = component.get("v.todoObj");
            var newEvent = component.getEvent('eventToBeCalled');
            newEvent.setParams({"objectAssignment" : objAssignment, "result" : "Value inserted"});
            newEvent.fire();
           }
        } 
    }
})
