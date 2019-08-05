export class Sales {

    public quantity: number;
    public unitPrice: number;
    public item: string;
    public subTotal: number

    constructor(object: Object){
        Object.assign(this,object);
    }
}