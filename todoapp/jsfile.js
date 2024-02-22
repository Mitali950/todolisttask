const taskInput = document.getElementById("task-input");
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskTitle = taskInput.value ;
    console.log(taskTitle);
  
    if (taskTitle == "") {
        alert("Please Enter Task"); /*alert message show hoga */
    }
    else {
    const listItem = document.createElement("li");
    listItem.innerHTML = taskTitle;
    taskList.append(listItem);
    let span =document.createElement('span');
    span.innerHTML = `&times;`;
    listItem.appendChild(span);
    taskInput.value = "";
    saveListData();
}});

/*when we click on button it will tik or can say cut */

taskList.addEventListener('click', (e) => {
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("check");
        saveListData(); /*jab item add ki to function call hua ye saveitem vala */
    }
      
    if(e.target.tagName == "SPAN") {
        const li = e.target.parentElement;
        li.remove();
        saveListData();/*jab item dlt ki tab bhi function call hua ye saveitem vala */
    } 
    /*jab cross par click hoga then item dlt hogi isliye ye if use ki */


});

/*listdata ko show karwane kai liye yeshowlistdata fun. use kiya 
localStorage.getItem("listItem" iske data ko  taskList.innerHTML mai shoe karvaya  */

function showListData(){
    taskList.innerHTML = localStorage.getItem("listItem");
}

/*jab ham page refresh karte to task dlt ho jata to esa na isliye function bnaya savListdata*/
function saveListData(){
    localStorage.setItem("listItem", taskList.innerHTML); 
}

/*now call the show function */
showListData();
/*agr showlistdata fun. call ni kiya to task refresh karne par fir se dlt ho jayega */