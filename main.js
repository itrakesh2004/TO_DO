let inputs=document.getElementById("input");
    let text=document.querySelector(".text");

  function add() {
    if(inputs.value == ""){
        alert("please add a new task");
    }else{
        let newele=document.createElement("ul");
        newele.innerHTML=`${inputs.value} <i class="fa-solid fa-trash delete pl-20 space-x-2"></i> <i class="fa-solid fa-pen-to-square edit"></i>`;
        newele.classList.add('flex', 'items-center', 'bg-white', 'px-4', 'py-2', 'rounded-md', 'shadow-md');
        text.appendChild(newele);
        
        inputs.value='';

        newele.querySelector(".delete").addEventListener('click',remove);
        
        newele.querySelector(".edit").addEventListener("click",edit);
       

        function remove(){
            newele.remove();
        }

        function edit(){
            inputs.value=newele.innerText;
            newele.remove();
        }

    }
  }