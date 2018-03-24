<<<<<<< HEAD:ts/task-class.ts
export default class Task{
=======

export class Task{
>>>>>>> e4fb36a805972f22f1c19aa0147319eba8ea14cc:ts/task-class.ts
  name:string;
  id:number;
  status:boolean;
  constructor(name:string){
    this.name = name;
    this.id = new Date().getTime();
    this.status = false;
  }
}
