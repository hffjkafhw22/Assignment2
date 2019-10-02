export class Products {
    objid:string;
    id:number;
    name:string;
    group:number;
    description:string;
    channel:number;

    constructor(objid:string,_id:number,_name:string,group:number,_description:string,_channel:number)
    {
        this.objid = objid;
        this.id = _id;
        this.name = _name;
        this.group = group;
        this.description = _description;
        this.channel = _channel;
        
    }
}
