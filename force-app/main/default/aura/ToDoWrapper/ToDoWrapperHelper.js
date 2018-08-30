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
    },
    insertRecord : function(component,event){
        console.log("Inside Helper");
        var taskObj = event.getParam("objectAssignment");
        var action = component.get("c.insertRecord");
        action.setParams({"objRecord" : taskObj});
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state = "SUCCESS"){
                component.set("v.todos",response.getReturnValue());
            }
            else{
                console.log("Unkown Error");
            }
        });
        $A.enqueueAction(action);
    }
})
