({
    getUserInfo : function(component) {
        var action = component.get("c.getUserName");

        action.setCallback(this,function(response){
            var state = response.getState();
            if(state = "SUCCESS"){
                console.log("Success : " + response.getReturnValue());
                component.set("v.user.LastName", response.getReturnValue());
            }
            else{
                console.log("Unkown Error");
            }
        }); 
        $A.enqueueAction(action);
    },
    getUserName: function(component) {
        //find returns a HTML element. We need to get the value from the view
        var varMobilePhone = component.find("Mobile").get("v.value");
        var action = component.get("c.getUserLastName");
		action.setParams({"MobilePhone" : varMobilePhone});
        
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state = "SUCCESS"){
                var objUser = response.getReturnValue();
                console.log("Success : " + response.getReturnValue());
                component.set("v.user.LastName", objUser.LastName);
                component.set("v.mobilePhoneAtt", objUser.MobilePhone);
            }
            else{
                console.log("Unkown Error");
            }
        }); 
        $A.enqueueAction(action);
    }
})