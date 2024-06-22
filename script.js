let task = document.querySelector("#task");
let add = document.querySelector("#add");
let newTask = document.querySelector("#new-task");

add.addEventListener("click", function () {
   if (task.value === "") {
      alert("Please add your task");
   } else {
      let newEle = document.createElement("div");
      newEle.classList.add("add-list");
      newTask.append(newEle);

      let text = document.createElement("p");
      text.classList.add("add-list-para");
      text.innerText = `${task.value}`;
      newEle.append(text);

      let checkButton = document.createElement("button");
      checkButton.classList.add("check-button");
      checkButton.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
      newEle.append(checkButton);


      let deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");
      deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
      newEle.append(deleteButton);

      task.value = "";

      checkButton.addEventListener("click",function(){
         text.style.textDecoration = "line-through";
      })

      deleteButton.addEventListener("click",function(){
         newEle.remove();
      })

   }
})



