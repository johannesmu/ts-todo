class Task{
  name:string;
  id:number;
  status:boolean;
  constructor(name:string){
    this.name = name;
    this.id = new Date().getTime();
    this.status = false;
    return this;
  }
}

function init(){
  const taskform = document.getElementById('taskform');
  taskform.addEventListener('submit', onFormSubmit );
}

function onFormSubmit( event: Event ){
  event.preventDefault();
}
