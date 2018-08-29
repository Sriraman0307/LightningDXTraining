({
    doInit : function(component, event, helper) {
        helper.getUserInfo(component);
    },
    submit : function(component, event, helper){
        helper.getUserName(component);
    }
})