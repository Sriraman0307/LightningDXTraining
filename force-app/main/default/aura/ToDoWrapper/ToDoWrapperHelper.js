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

        if(event.getParam("objectAssignment") !="undefined"){
            var taskObj = event.getParam("objectAssignment");
        }
        else{
            var taskObj = component.get("v.todos");
        }
        var action = component.get("c.insertRecord");
        var resultObj = event.getParam("result");
        console.log("resultObj : " + resultObj);
        console.log("taskObj : " + taskObj);
        action.setParams({"objRecord" : taskObj});
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state = "SUCCESS"){
                if(response.getReturnValue().length>0){
                    console.log("Value not null :" + response.getReturnValue());
                    component.set("v.todos",response.getReturnValue());
                }
                component.set("v.resultTobePrinted",resultObj);
            }
            else{
                console.log("Unkown Error");
            }
        });
        $A.enqueueAction(action);
    }
})
