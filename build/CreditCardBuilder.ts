import readlineSync = require('readline-sync');
import { Payment } from "./Payment";

/**
 * Builder class for PaymentSystemContext object that uses Credit Card attributes
 */
export class CreditCardBuilder extends Payment{
    
    getInfo:() => ({[key: string]: string});
    validate:(userInput: {[key: string]: string}) => boolean;

    public constructor()
    {
        super();
        this.getInfo = this.getPaymentInfo;
        this.validate = this.validateTest;
    }
    
    /**
     * This function uses the key-value pair to get the input credit card information
     * @returns credit care information from the user
     */
    getPaymentInfo(): {[key: string]: string} {
        let userInput: {[key: string]: string} = {};
        console.log('Enter Credit Card Payment Details.')

        userInput['name'] = readlineSync.question('  Name: ');
        userInput['creditCardNumber'] = readlineSync.question('  Credit Card Number: ');
        userInput['creditCardExpirationDate']= readlineSync.question('  Credit Card Expiration Date (MM/DD): ');

        return userInput;
    }

    /**
     * This function checks if the userInput information meets the conditions
     * @param userInput information input from the user's credit card information
     * @returns true if information meets conditions, otherwise false
     */
    validateTest(userInput: {[key: string]: string}): boolean {
        return /^[\w.' ]+$/.test(userInput.name) && /\d{15,16}/.test(userInput.creditCardNumber) 
        && /\d\d\/\d\d/.test(userInput.creditCardExpirationDate);
    }  
}