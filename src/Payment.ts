import { PaymentSystemContext } from "./payment_systems";

/**
 * Abstract class that sets up the PaymentSystemContext object.
 * Inherited by other classes by type of payment
 */
export abstract class Payment{
    private psc!: PaymentSystemContext
    abstract getInfo:() => ({[key: string]: string});
    abstract validate:(userInput: {[key: string]: string}) => boolean;

    /**
     * This function builds the the PaymentSystemContext object
     */
    build(){
        this.psc = new PaymentSystemContext(this.getInfo, this.validate);
    }

    /**
     * This function gets the PaymentSystemContext object
     * @returns PaymentSystemObject
     */
    getExecutor(): PaymentSystemContext{
        return this.psc;
    }
}