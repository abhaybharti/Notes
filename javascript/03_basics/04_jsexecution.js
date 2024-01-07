//How code execute in JS (Execution Context)
//Call Stack
/*
Global Execution Context
Function Execution Context
Eval Execution Context
*/

//Function code to be shown in execution context
let v1 = 10;
let v2 = 20;
function add(v1,v2){
    let total = v1+v2;
    return total;
}

let result = add(v1,v2);
let resultTwo = add(10,15);

/* --- How JS Execution Happends ---


1. Global Execution or Environment -> this

2. Memory Phase -> all variables re put at a place
v1 = undefined
v2 = undefined
add -> definition
result = undefined
resultTwo = undefined

3. Execution Phase
 v1 = 10
 v2 = 20
 add -> new Enviornment + new Execution Context/thread created (Step 1 t 3 will be repeated as many times function is called)
*/

//How to write code in Chrome browser
// Sources -> Snippeets -> New Snippet -> file name -> write code in right side pane -> Crtl + S to save file