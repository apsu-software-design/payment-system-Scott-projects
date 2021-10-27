import readlineSync = require('readline-sync');
import { Payment } from './Payment';

/**
 * Builder class for PaymentSystemContext object that uses Offline Payment attributes
 */
export class OfflinePaymentBuilder extends Payment{

    getInfo:() => ({[key: string]: string});
    validate:(userInput: {[key: string]: string}) => boolean;

    public constructor(){
        super();
        this.getInfo = this.getPaymentInfo;
        this.validate = this.validateTest;
    }

    /**
     * This function uses the key-value pair to get the input offline payment information
     * @returns credit care information from the user
     */
    getPaymentInfo(): {[key: string]: string}  {
        let userInput: {[key: string]: string} = {};
        console.log('Enter Offline Payment Details.');

        userInput['name'] = readlineSync.question('  Name: ');
        userInput['billingAddress'] = readlineSync.question('  Enter Your Billing Address: ');

        return userInput;
    }

    /**
     * This function checks if the userInput information meets the conditions
     * @param userInput information input from the user's offline payment information
     * @returns true if information meets conditions, otherwise false
     */
    validateTest(userInput: {[key: string]: string}): boolean {
        return /^[\w.' ]+$/.test(userInput.name) && /^[\w.' ]+$/.test(userInput.billingAddress);
    }
}