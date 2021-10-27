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
exports.OfflinePaymentBuilder = void 0;
var readlineSync = require("readline-sync");
var Payment_1 = require("./Payment");
/**
 * Builder class for PaymentSystemContext object that uses Offline Payment attributes
 */
var OfflinePaymentBuilder = /** @class */ (function (_super) {
    __extends(OfflinePaymentBuilder, _super);
    function OfflinePaymentBuilder() {
        var _this = _super.call(this) || this;
        _this.getInfo = _this.getPaymentInfo;
        _this.validate = _this.validateTest;
        return _this;
    }
    /**
     * This function uses the key-value pair to get the input offline payment information
     * @returns credit care information from the user
     */
    OfflinePaymentBuilder.prototype.getPaymentInfo = function () {
        var userInput = {};
        console.log('Enter Offline Payment Details.');
        userInput['name'] = readlineSync.question('  Name: ');
        userInput['billingAddress'] = readlineSync.question('  Enter Your Billing Address: ');
        return userInput;
    };
    /**
     * This function checks if the userInput information meets the conditions
     * @param userInput information input from the user's offline payment information
     * @returns true if information meets conditions, otherwise false
     */
    OfflinePaymentBuilder.prototype.validateTest = function (userInput) {
        return /^[\w.' ]+$/.test(userInput.name) && /^[\w.' ]+$/.test(userInput.billingAddress);
    };
    return OfflinePaymentBuilder;
}(Payment_1.Payment));
exports.OfflinePaymentBuilder = OfflinePaymentBuilder;
