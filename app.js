var counter = 0;
function setColor(){
    var body = document.getElementById('body');
    body.style.backgroundColor = 'gray';
    
}


function createTask(){
    
    var bodyContent = document.getElementById('bodyContent');//взема главния див
    var inputTask = document.getElementById('inputTask').value;//взема текстовото поле
    var newInputTask = document.createElement('p');//създава нов параграф

    var paragraph = document.getElementsByTagName('p');
    if(inputTask){//ако има текст
        var taskNumber = counter +1;//номер на задача
        newInputTask.innerHTML = taskNumber+" . "+inputTask;//изписва номер на задача и текст в нов параграф        
        counter += 1;//увеличва брояча с 1
        newInputTask.setAttribute('id',counter);//настройване на атрибут id
        newInputTask.setAttribute('class','inClass');//настройване на атрибут class   
        bodyContent.appendChild(newInputTask);
        document.getElementById('inputTask').value='';
        console.log('num of task: '+counter+'\ncontent: '+inputTask)
     
    }
    newInputTask.addEventListener("mouseover", function( event ) {   
        event.target.style.backgroundColor = "#330066";
        
        
    });
    newInputTask.addEventListener("mouseout", function( event ) {   
        event.target.style.backgroundColor = "gray";
    });
    newInputTask.addEventListener("mouseup", function( event ) {   
        console.log(event.target.id);
        event.target.style.backgroundColor = "red";
        var nodeDel = event.target;
        alert(nodeDel+'deleting?');
        deleteTask(nodeDel);
        //taskID = event.target.id;    
        
        
    }); 
}
function deleteTask(nodeDel){
     // console.log('remove task '+ a +" "+b);
     bodyContent.removeChild(nodeDel);
    
}
