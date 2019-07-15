var counter = 1;
var taskArr = [];
function setCounter(num){
    return num +=1;
}
function initial(){
    console.log('ok');
    document.getElementById('numOfTask').innerHTML = counter;
}

function func1(){
    
    var number ;
    var task = document.getElementById('taskString').value;//task text
    console.log('task: '+task);
    
    if(task){
        number = setCounter(counter);//nomer na zadacha
        counter = number;//uvelichava countr s 1
        console.log('counter is: ' + counter)//display counter
        var not = document.getElementById('numOfTask').innerHTML = counter;//set nomer na zadacha na counter
        console.log('task number: ' + number);//display number
        taskArr[number-1]=task;//set v masiva s index number stoinost task
        //console.log('true');
        //console.log(not);
        console.log('length of taskArr is : ' + taskArr.length);
    }else{
        console.log('false');
    }
    var taskText = document.getElementById('taskString').value ='';
    console.log(' out of if length of taskArr is : ' + taskArr.length);   
}
function func2(){
    for(var i = 1; i<taskArr.length; i++){
        console.log(taskArr[i]);
    }
}



// if(taskText===undefined){
//        console.log('none tasktext');
//        console.log('task name: ' + task + '\t');
//        console.log('task number: ' + number);
//        console.log('length of taskArr is : ' + taskArr.length);
//        console.log(not);
//    }