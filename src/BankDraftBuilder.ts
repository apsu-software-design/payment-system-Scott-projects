import readlineSync = require('readline-sync');
import { Payment } from './Payment';

/**
 * Builder class for PaymentSystemContext object that uses Bank Draft attributes
 */
export class BankDraftBuilder extends Payment{

    getInfo:() => ({[key: string]: string});
    validate:(userInput: {[key: string]: string}) => boolean;
    
    public constructor(){
        super();
        this.getInfo = this.getPaymentInfo;
        this.validate = this.validateTest;
    }

    /**
     * This function uses the key-value pair to get the bank draft information
     * @returns credit care information from the user
     */
    getPaymentInfo(): {[key: string]: string} {
        let userInput: {[key: string]: string} = {}
        console.log('Enter Bank Account Details.');

        userInput['name']= readlineSync.question('  Name: ');
        userInput['bankRoutingNumber'] = readlineSync.question('  Bank Routing Number: ');
        userInput['bankAccountNumber'] = readlineSync.question('  Bank Account Number: ');

        return userInput;
    }

    /**
     * This function checks if the userInput information meets the conditions
     * @param userInput information input from the user's bank draft information
     * @returns true if information meets conditions, otherwise false
     */
    validateTest(userInput: {[key: string]: string}): boolean {
        return /^[\w.' ]+$/.test(userInput.name) && /\d{9}/.test(userInput.bankRoutingNumber) && /\d{6,12}/.test(userInput.bankAccountNumber);
}
}