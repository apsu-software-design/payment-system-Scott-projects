"use strict";
exports.__esModule = true;
exports.Payment = void 0;
var payment_systems_1 = require("./payment_systems");
/**
 * Abstract class that sets up the PaymentSystemContext object.
 * Inherited by other classes by type of payment
 */
var Payment = /** @class */ (function () {
    function Payment() {
    }
    /**
     * This function builds the the PaymentSystemContext object
     */
    Payment.prototype.build = function () {
        this.psc = new payment_systems_1.PaymentSystemContext(this.getInfo, this.validate);
    };
    /**
     * This function gets the PaymentSystemContext object
     * @returns PaymentSystemObject
     */
    Payment.prototype.getExecutor = function () {
        return this.psc;
    };
    return Payment;
}());
exports.Payment = Payment;
