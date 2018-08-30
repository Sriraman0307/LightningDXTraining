({
    doInit : function(component, event, helper) {
        helper.getToDos(component);
    },
    listentoEvent : function(component,event,helper){
        helper.insertRecord(component,event);
    } 
})
