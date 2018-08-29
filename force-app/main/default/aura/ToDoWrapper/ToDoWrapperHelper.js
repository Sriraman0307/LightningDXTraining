({
    getToDos : function(component) {
        var action = component.get("c.getToDos");

        action.setCallback(this,function(response){
            var state = response.getState();
            if(state = "SUCCESS"){
                console.log("Success : " + response.getReturnValue());
                component.set("v.todos", response.getReturnValue());
            }
            else{
                console.log("Unkown Error");
            }
        }); 
        $A.enqueueAction(action);
    }
})
