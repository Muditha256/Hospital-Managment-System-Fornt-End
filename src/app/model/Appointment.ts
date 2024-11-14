export class Appoinment{
    public id:number;
    public type:string;
    public qr:string;
    public dateTime:Date;
    public description:string;
    public status:string;
    public roomNumber:string;
    public q_Number:string;
    public patientId:string;
    public adminId:string;

    constructor(id:number,type:string,qr:string,dateTime:Date,description:string,status:string,roomNumber:string,q_Number:string,patientId:string,adminId:string){
        this.id=id;
        this.type=type;
        this.qr=qr;
        this.dateTime=dateTime;
        this.description=description
        this.status=status;
        this.roomNumber=roomNumber;
        this.q_Number=q_Number;
        this.patientId=patientId;
        this.adminId=adminId;
    }
}