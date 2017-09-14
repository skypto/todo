//place to store todos
var todos= ['time','money','fame','hussle','life'];

//Display todos
console.log(todos);

//Add todos
todos.push("last item");
console.log(todos);

//Change todos
todos[0]="Big Time";
console.log(todos);

//Delete todos
todos.splice(0,1);
console.log(todos);