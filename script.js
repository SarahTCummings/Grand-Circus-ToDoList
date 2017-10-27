var taskList = document.getElementById("taskList");
var addTask = document.getElementById("button");
var task = document.getElementById("task");

var tasks = [];
addTask.onclick = function(){
  var newTask = document.createElement("input");
  var taskWords = document.createElement("p");
  taskWords.innerHTML = task.value;
  newTask.setAttribute("type","checkbox");
  tasks += newTask;
  taskList.appendChild(newTask);
  taskList.appendChild(taskWords);
}
tasks.forEach(function(task){
task.onclick = function(){

}
})
}
