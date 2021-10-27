"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CreditCardBuilder = void 0;
var readlineSync = require("readline-sync");
var Payment_1 = require("./Payment");
/**
 * Builder class for PaymentSystemContext object that uses Credit Card attributes
 */
var CreditCardBuilder = /** @class */ (function (_super) {
    __extends(CreditCardBuilder, _super);
    function CreditCardBuilder() {
        var _this = _super.call(this) || this;
        _this.getInfo = _this.getPaymentInfo;
        _this.validate = _this.validateTest;
        return _this;
    }
    /**
     * This function uses the key-value pair to get the input credit card information
     * @returns credit care information from the user
     */
    CreditCardBuilder.prototype.getPaymentInfo = function () {
        var userInput = {};
        console.log('Enter Credit Card Payment Details.');
        userInput['name'] = readlineSync.question('  Name: ');
        userInput['creditCardNumber'] = readlineSync.question('  Credit Card Number: ');
        userInput['creditCardExpirationDate'] = readlineSync.question('  Credit Card Expiration Date (MM/DD): ');
        return userInput;
    };
    /**
     * This function checks if the userInput information meets the conditions
     * @param userInput information input from the user's credit card information
     * @returns true if information meets conditions, otherwise false
     */
    CreditCardBuilder.prototype.validateTest = function (userInput) {
        return /^[\w.' ]+$/.test(userInput.name) && /\d{15,16}/.test(userInput.creditCardNumber)
            && /\d\d\/\d\d/.test(userInput.creditCardExpirationDate);
    };
    return CreditCardBuilder;
}(Payment_1.Payment));
exports.CreditCardBuilder = CreditCardBuilder;
