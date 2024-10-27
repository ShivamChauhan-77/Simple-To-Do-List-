let todo = [];

let req = prompt("Enter the request:");

while(true){
    if(req == "quit"){
        console.log("You quitted the list.");
        break;
    } else if(req == "list"){
        console.log("Added tasks are listed below.");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("End of tasks.");
    } else if(req == "add"){
        let task = prompt("Add a task:");
        todo.push(task);
        console.log("task added");
    } else if(req == "delete"){
        let index = prompt("Enter the task index you want to delete:");
        todo.splice(index,1);
        console.log("task deleted");
    } else{
        console.log("You requested a wrong request. Please try again!!");
    }
    req = prompt("Enter the request:");
}