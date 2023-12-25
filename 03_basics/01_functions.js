function hello(){
    console.log("A");
}

// hello; //This return reference of a function, useful in React component
// hello() //This statement executes a function

function userName(name){
    //Check for null and undefined
    if (name === undefined){
        console.log("Enter a username");
        //return;
    }

    return `${name} just logged in`
}

userName("Abhay");