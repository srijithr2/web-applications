window.addEventListener('load',() => {
    const form =  document.querySelector(".header_form");
    const input = document.querySelector("#task_input");
    const list_element = document.querySelector("#task");
    
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        const task_input = input.value;

        if(!task_input){
            alert("Please fill the task");
            return;
        }
        
        const task_container_element= document.createElement("div");
        task_container_element.classList.add("task_container");
        
        const tasks_to_do_list_element = document.createElement("div");
        tasks_to_do_list_element.classList.add("tasks_to_do_list");
        

        task_container_element.appendChild(tasks_to_do_list_element);

        const task_input_element = document.createElement("input");
        task_input_element.type = "text";
        task_input_element.id = "tasks_to_do"
        task_input_element.value = task_input;
        task_input_element.setAttribute("readonly","readonly");

        tasks_to_do_list_element.appendChild(task_input_element);

        const task_action_element = document.createElement("div");
        task_action_element.classList.add("buttons");

        const task_edit_element = document.createElement("button");
        task_edit_element.classList.add("edit");
        task_edit_element.innerHTML ="Edit";

        const task_delete_element = document.createElement("button");
        task_delete_element.classList.add("delete");
        task_delete_element.innerHTML ="Delete";

        task_action_element.appendChild(task_edit_element);
        task_action_element.appendChild(task_delete_element);
        task_container_element.appendChild(task_action_element);
        list_element.appendChild(task_container_element);
        input.value="";

        task_edit_element.addEventListener('click',() =>{
            if(task_edit_element.innerText.toLocaleLowerCase()=="edit")
            {
                task_input_element.removeAttribute("readonly");
                task_input_element.focus();
                task_edit_element.innerText="Save";
            }else{
                task_input_element.setAttribute("readonly","readonly");
                task_edit_element.innerHTML="Edit";
            }
        });
        task_delete_element.addEventListener('click', () => {
            list_element.removeChild(task_container_element);
        });
    });
});