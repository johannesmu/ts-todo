
export class Task{
  name:string;
  id:number;
  status:boolean;
  constructor(name:string){
    this.name = name;
    this.id = new Date().getTime();
    this.status = false;
  }
}
