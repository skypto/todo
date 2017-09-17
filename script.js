//Final Version [TodoList]

var todoList = {
  todos:[],
  addTodos: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodos: function(position,todoText){
    this.todos[position].todoText = todoText;
  },
  deleteTodos: function(position) {
    this.todos.splice(position,1);
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function (){
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    //Get number of completed Todos
    for (var i =0; i<totalTodos; i++){
      if (this.todos[i].completed === true){
        completedTodos++;
      }
    }  
    //Case 1: If everything is true, make all false
    if (completedTodos === totalTodos){
      for (i =0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
    //Case 2: Otherwise make everything True
    }else{
      for (i =0; i < totalTodos; i++){
        this.todos[i].completed = true;
      }
    }
  }
};


var handlers= {
  addTodos: function(){
   var addTodoTextInput =document.getElementById('addTodoTextInput');
    todoList.addTodos(addTodoTextInput.value);
    addTodoTextInput.value = ' ';
    views.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput =document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodos(changeTodoPositionInput.valueAsNumber,changeTodoTextInput.value);
    changeTodoPositionInput.value='';
    changeTodoTextInput.value='';
    views.displayTodos();
  },
  deleteTodos: function(){
    var deletePositionInput = document.getElementById('deletePositionInput');
    todoList.deleteTodos('deletePositionInput.valueAsNumber');
    deletePositionInput.value='';
    views.displayTodos();
  },
  toggleComplete: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value='';
    views.displayTodos();
  },
  toggleTodos: function(){
    todoList.toggleAll();
    views.displayTodos();
  }
};

var views = {
  displayTodos: function(){
    //create a unordered bulleted list and clear content
  var todosUl=document.querySelector('ul');
  todosUl.innerHTML=" ";
    for(var i =0; i <todoList.todos.length; i++){
    var todosLi=document.createElement('li');
    var todo =todoList.todos[i];
    var todoTextWithCompletion ='';
    
  if (todo.completed === true){
    todoTextWithCompletion = '(x)' + todo.todoText;
  }else{
    todoTextWithCompletion = '( )' + todo.todoText;
  }
  todosLi.textContent = todoTextWithCompletion;
    todosUl.appendChild(todosLi); 
    }
  } 
};




//Change todos
todos[0]="Big Time";
console.log(todos);

//Delete todos
todos.splice(0,1);
console.log(todos);