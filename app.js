var counter = 0;
function setColor(){
    var body = document.getElementById('body');
    body.style.backgroundColor = 'gray';
    
}


function createTask(){
    
    var bodyContent = document.getElementById('bodyContent');
    var inputTask = document.getElementById('inputTask').value;
    var newInputTask = document.createElement('p');
    var doneBtn = document.createElement('input');
    //doneBtn.setAttribute('type','checkbox');
    console.log(newInputTask);
    var paragraph = document.getElementsByTagName('p');
  ;
    if(inputTask){
        var taskNumber = counter +1;
        //taskLengthValidation(inputTask,newInputTask);
        newInputTask.innerHTML = taskNumber+" . "+inputTask//funkciq za proverka na daljinata i ako e po golqma ot poleto reset razmerite na p;
        
        counter += 1;
        newInputTask.setAttribute('id',counter);
        newInputTask.setAttribute('class','inClass');
        //newInputTask.style.backgroundColor = '#339966';
        
        
        
        bodyContent.appendChild(newInputTask);
       // bodyContent.appendChild(doneBtn);
        document.getElementById('inputTask').value='';
        console.log('num of task: '+counter+'\ncontent: '+inputTask)
    }
    newInputTask.addEventListener("mouseover", function( event ) {   
  event.target.style.backgroundColor = "#339966";
    });
    newInputTask.addEventListener("mouseout", function( event ) {   
  event.target.style.backgroundColor = "gray";
    });
    newInputTask.addEventListener("onclick", function( event ) {   
  console.log(sevent.target);
    }); 
}
function taskLengthValidation(inputTask,newInputTask){
    if(inputTask.length>10){
            console.log('else state or taskLenthValid funk');
            console.log(inputTask.length);
            newInputTask.setAttribute('width',inputTask.length);
        
    }else{
        console.log('else state or taskLenthValid funk');
        console.log(inputTask.length);
    }
}