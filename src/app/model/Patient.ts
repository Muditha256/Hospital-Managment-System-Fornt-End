import { retry } from "rxjs";

export class Patient{
    public id:number;
    public name:string;
    public address:string;
    public bloodgroup:string;
    public category:string;
    public gender:string;
    public contact:string;
    public note:string;
    public age:string;
    public allergies:string;

    constructor(id:number,name:string,address:string,bloodgroup:string,category:string,gender:string,contact:string,note:string,age:string,allergies:string){
        this.id=id;
        this.name=name;
        this.address=address;
        this.bloodgroup=bloodgroup;
        this.category=category
        this.gender=gender;
        this.contact=contact;
        this.note=note;
        this.age=age;
        this.allergies=allergies;
    }

 


}