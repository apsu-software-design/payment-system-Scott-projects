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
exports.BankDraftBuilder = void 0;
var readlineSync = require("readline-sync");
var Payment_1 = require("./Payment");
/**
 * Builder class for PaymentSystemContext object that uses Bank Draft attributes
 */
var BankDraftBuilder = /** @class */ (function (_super) {
    __extends(BankDraftBuilder, _super);
    function BankDraftBuilder() {
        var _this = _super.call(this) || this;
        _this.getInfo = _this.getPaymentInfo;
        _this.validate = _this.validateTest;
        return _this;
    }
    /**
     * This function uses the key-value pair to get the bank draft information
     * @returns credit care information from the user
     */
    BankDraftBuilder.prototype.getPaymentInfo = function () {
        var userInput = {};
        console.log('Enter Bank Account Details.');
        userInput['name'] = readlineSync.question('  Name: ');
        userInput['bankRoutingNumber'] = readlineSync.question('  Bank Routing Number: ');
        userInput['bankAccountNumber'] = readlineSync.question('  Bank Account Number: ');
        return userInput;
    };
    /**
     * This function checks if the userInput information meets the conditions
     * @param userInput information input from the user's bank draft information
     * @returns true if information meets conditions, otherwise false
     */
    BankDraftBuilder.prototype.validateTest = function (userInput) {
        return /^[\w.' ]+$/.test(userInput.name) && /\d{9}/.test(userInput.bankRoutingNumber) && /\d{6,12}/.test(userInput.bankAccountNumber);
    };
    return BankDraftBuilder;
}(Payment_1.Payment));
exports.BankDraftBuilder = BankDraftBuilder;
