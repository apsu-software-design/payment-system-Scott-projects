
export class PaymentSystemContext {

    private getInfo:() => ({[key: string]: string});
    private validate:(userInput: {[key: string]: string}) => boolean

    public constructor(getInfo:() => ({[key: string]: string}), validate:(userInput: {[key: string]: string}) => boolean){
        this.getInfo = getInfo;
        this.validate = validate;
    }
    
    execute(){
        let valid = this.validate(this.getInfo())
        if (valid) {
            console.log("Your payment information is being encrypted.");

            console.log("The payment is being processed.");
        }
        else
            console.log('The payment is invalid.');
    }

    

}
