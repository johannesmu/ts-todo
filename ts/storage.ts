export function storeData( data: any ){
  try{
    if(window.localStorage){
  window.localStorage.setItem('tasks', JSON.stringify(data));
      return true;
    }
  }
catch(error){
  console.log(error.message);
}
}

export function readData(){
try{
  if(window.localStorage){
    let tasks = JSON.parse(window.localStorage.getItem('tasks'));
    return tasks;
  }
}
catch(error){
  console.log(error.message);
}
}