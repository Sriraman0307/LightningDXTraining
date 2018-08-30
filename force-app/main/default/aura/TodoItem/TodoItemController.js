({
    checkData : function(component, event, helper) {
        if(event.getParam('keyCode') == 13){
           // helper.checkIfAvailable(component, event);
           var objAssignment = component.get("v.todoObj");
           var newEvent = component.getEvent('eventToBeCalled');
           newEvent.setParams({"objectAssignment" : objAssignment});
           newEvent.fire();
        } 

    }
})
