import readlineSync = require('readline-sync')
import { Payment } from './Payment';

/**
 * Builder class for PaymentSystemContext object that uses Online Payment attributes
 */
export class OnlinePaymentBuilder extends Payment{

    getInfo:() => ({[key: string]: string});
    validate:(userInput: {[key: string]: string}) => boolean;


    public constructor(){
        super();
        this.getInfo = this.getPaymentInfo;
        this.validate = this.validateTest;
    }

    /**
     * This function uses the key-value pair to get the input online payment information
     * @returns credit care information from the user
     */
    getPaymentInfo(): {[key: string]: string} {
        let userInput: {[key: string]: string} = {};
        console.log('Enter Online Payment Details.');

        userInput['email'] = readlineSync.question('  Enter Your Email Address: ');
        userInput['paymentPassword'] = readlineSync.question('  Enter Your Payment Password: ');

        return userInput;
    }

    /**
     * This function checks if the userInput information meets the conditions
     * @param userInput information input from the user's online payment information
     * @returns true if information meets conditions, otherwise false
     */
    validateTest(userInput: {[key: string]: string}): boolean {
        return /^[\w@.]+$/.test(userInput.email) && /\w+/.test(userInput.paymentPassword);
    }
}